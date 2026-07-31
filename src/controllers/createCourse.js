const Course = require("../models/course");

const createCourse = async (req, res) => {
  try {
    const {
      title,
      slug,
      technology,
      description,
      level,
      duration,
      price,
      lessons,
      thumbnail,
      includes,
      isPublished,
    } = req.body;

    const existingCourse = await Course.findOne({ slug });
    if (existingCourse) {
      return res.status(400).json({ success: false, message: "Slug already exists" });
    }

    const course = await Course.create({
      title,
      slug,
      technology,
      description,
      level,
      duration,
      price,
      lessons,
      thumbnail,
      includes,
      isPublished,
    });

    return res.status(201).json({ success: true, data: course });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {createCourse};