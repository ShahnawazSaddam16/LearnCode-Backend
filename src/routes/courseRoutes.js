const express = require("express");
const { getAllCourses, getCourseBySlug } = require("../controllers/course");
const {authMiddleware} = require("../middleware/authMiddleware");
const limiter = require("../utils/limiter");

const router = express.Router();

router.get("/", limiter, authMiddleware, getAllCourses);
router.get("/:slug", limiter, authMiddleware, getCourseBySlug);

module.exports = router;
