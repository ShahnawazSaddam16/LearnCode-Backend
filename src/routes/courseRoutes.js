const express = require("express");
const { getAllCourses, getCourseBySlug, getLessonsByCourse, buyCourse, stripeWebhook } = require("../controllers/course");
const {authMiddleware} = require("../middleware/authMiddleware");
const limiter = require("../utils/limiter");

const router = express.Router();

router.get("/courseData", limiter, authMiddleware, getAllCourses);
router.get("/courseData/:slug", limiter, authMiddleware, getCourseBySlug);
router.get("/courseData/:slug/lessons", limiter, authMiddleware, getLessonsByCourse);
router.post("/buyCourse", limiter, authMiddleware, buyCourse);

module.exports = router;