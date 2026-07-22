const express = require("express");
const { getAllCourses, getCourseBySlug, buyCourse, initiateStripePayment, verifyStripePayment } = require("../controllers/course");
const {authMiddleware} = require("../middleware/authMiddleware");
const limiter = require("../utils/limiter");

const router = express.Router();

router.get("/courseData", limiter, authMiddleware, getAllCourses);
router.get("/courseData/:slug", limiter, authMiddleware, getCourseBySlug);
router.post("/buyCourse", limiter, authMiddleware, buyCourse);
router.post("/pay/stripe", limiter, authMiddleware, initiateStripePayment);
router.post("/pay/stripe/verify", limiter, authMiddleware, verifyStripePayment);

module.exports = router;