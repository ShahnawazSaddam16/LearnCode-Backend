const Stripe = require("stripe");
const Course = require("../models/course");
const userCourses = require("../models/userCourses");
const courseData = require("../utils/courseData");

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const seedCourses = async () => {
  const count = await Course.countDocuments();
  if (count === 0) {
    await Course.insertMany(courseData);
  }
};

const getAllCourses = async (req, res) => {
  try {
    await seedCourses();

    const courses = await Course.find({ isPublished: true }).select("-__v -githubRepo");

    res.status(200).json({
      success: true,
      courses,
    });
  } catch (err) {
    console.log("Get Courses Error:", err);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const getCourseBySlug = async (req, res) => {
  try {
    await seedCourses();

    const { slug } = req.params;

    const course = await Course.findOne({ slug, isPublished: true }).select("-__v");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    let hasPurchased = false;

    if (req.user) {
      const purchase = await userCourses.findOne({
        user: req.user._id,
        course: course._id,
        status: "completed",
      });

      if (purchase) {
        hasPurchased = true;
      }
    }

    const courseObj = course.toObject();

    if (!hasPurchased) {
      delete courseObj.githubRepo;
    }

    res.status(200).json({
      success: true,
      course: courseObj,
      hasPurchased,
    });
  } catch (err) {
    console.log("Get Course Error:", err);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const buyCourse = async (req, res) => {
  try {
    const { slug } = req.body;

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Course slug is required",
      });
    }

    const course = await Course.findOne({ slug, isPublished: true });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    const alreadyPurchased = await userCourses.findOne({
      user: req.user._id,
      course: course._id,
      status: "completed",
    });

    if (alreadyPurchased) {
      return res.status(400).json({
        success: false,
        message: "Course already purchased",
      });
    }

    const purchase = await userCourses.create({
      user: req.user._id,
      email: req.user.email,
      course: course._id,
      title: course.title,
      price: course.price,
      status: "completed",
    });

    res.status(201).json({
      success: true,
      message: "Course purchased successfully",
      purchase: {
        title: course.title,
        price: course.price,
        githubRepo: course.githubRepo,
      },
    });
  } catch (err) {
    console.log("Buy Course Error:", err);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const initiateStripePayment = async (req, res) => {
  try {
    const { slug } = req.body;

    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Course slug is required",
      });
    }

    const course = await Course.findOne({ slug, isPublished: true });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    const alreadyPurchased = await userCourses.findOne({
      user: req.user._id,
      course: course._id,
      status: "completed",
    });

    if (alreadyPurchased) {
      return res.status(400).json({
        success: false,
        message: "Course already purchased",
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: req.user.email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: course.title,
            },
            unit_amount: Math.round(course.price * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/courses/${course.slug}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/courses/${course.slug}`,
    });

    await userCourses.create({
      user: req.user._id,
      email: req.user.email,
      course: course._id,
      title: course.title,
      price: course.price,
      paymentMethod: "stripe",
      transactionId: session.id,
      status: "pending",
    });

    res.status(200).json({
      success: true,
      url: session.url,
    });
  } catch (err) {
    console.log("Stripe Initiate Error:", err);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const verifyStripePayment = async (req, res) => {
  try {
    const { session_id } = req.body;

    if (!session_id) {
      return res.status(400).json({
        success: false,
        message: "Session id is required",
      });
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);

    const purchase = await userCourses.findOne({ transactionId: session_id });

    if (!purchase) {
      return res.status(404).json({
        success: false,
        message: "Purchase not found",
      });
    }

    if (session.payment_status === "paid") {
      purchase.status = "completed";
      await purchase.save();
    } else {
      purchase.status = "failed";
      await purchase.save();
    }

    res.status(200).json({
      success: true,
      status: purchase.status,
    });
  } catch (err) {
    console.log("Stripe Verify Error:", err);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  getAllCourses,
  getCourseBySlug,
  buyCourse,
  initiateStripePayment,
  verifyStripePayment,
};