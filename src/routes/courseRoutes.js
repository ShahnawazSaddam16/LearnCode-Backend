const express = require("express");
const { getAllCourses, getCourseBySlug, getLessonsByCourse, buyCourse,} = require("../controllers/course");
const {userCourse} = require("../controllers/userCourse");
const {createCourse} = require("../controllers/createCourse");
const {authMiddleware} = require("../middleware/authMiddleware");
const limiter = require("../utils/limiter");

const router = express.Router();

router.get("/courseData", limiter, authMiddleware, getAllCourses);
router.get("/courseData/:slug", limiter, authMiddleware, getCourseBySlug);
router.get("/courseData/:slug/lessons", limiter, authMiddleware, getLessonsByCourse);
router.get("/userCourse", limiter, authMiddleware, userCourse);
router.post("/buyCourse", limiter, authMiddleware, buyCourse);
router.post("/create-courses", limiter, createCourse);

module.exports = router;