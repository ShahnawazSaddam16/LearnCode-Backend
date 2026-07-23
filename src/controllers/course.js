require("dotenv").config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Course = require("../models/course");
const userCourses = require("../models/userCourses");
const courseData = require("../utils/courseData");

const seedCourses = async () => {
  const count = await Course.countDocuments();
  if (count === 0) {
    await Course.insertMany(courseData);
  }
};

const getPurchasableCourse = async (slug, userId) => {
  const course = await Course.findOne({ slug, isPublished: true });

  if (!course) {
    return { error: { status: 404, message: "Course not found" } };
  }

  const alreadyPurchased = await userCourses.findOne({
    user: userId,
    course: course._id,
    status: "completed",
  });

  if (alreadyPurchased) {
    return { error: { status: 400, message: "Course already purchased" } };
  }

  return { course };
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

    const { course, error } = await getPurchasableCourse(slug, req.user._id);

    if (error) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(course.price * 100),
      currency: "usd",
      metadata: {
        userId: req.user._id.toString(),
        courseId: course._id.toString(),
        slug: course.slug,
      },
    });

    await userCourses.create({
      user: req.user._id,
      email: req.user.email,
      course: course._id,
      title: course.title,
      price: course.price,
      status: "pending",
      paymentMethod: "stripe",
      transactionId: paymentIntent.id,
    });

    res.status(201).json({
      success: true,
      message: "Payment intent created",
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log("Buy Course Error:", err);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.log("Webhook Signature Error:", err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;

    await userCourses.findOneAndUpdate(
      { transactionId: paymentIntent.id },
      { status: "completed" }
    );
  }

  res.status(200).json({ received: true });
};

module.exports = {
  getAllCourses,
  getCourseBySlug,
  buyCourse,
  stripeWebhook,
};