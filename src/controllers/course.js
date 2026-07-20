const Course = require("../models/course");
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

    const courses = await Course.find({ isPublished: true }).select("-__v");

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

    res.status(200).json({
      success: true,
      course,
    });
  } catch (err) {
    console.log("Get Course Error:", err);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = { getAllCourses, getCourseBySlug };
