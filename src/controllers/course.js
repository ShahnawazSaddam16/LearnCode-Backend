const Course = require("../models/course");
const userCourses = require("../models/userCourses");
const courseData = require("../utils/courseData");

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

module.exports = { getAllCourses, getCourseBySlug, buyCourse };