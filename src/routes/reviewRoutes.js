const express = require("express");
const router = express.Router();
const {authMiddleware} = require("../middleware/authMiddleware");
const limiter = require("../utils/limiter");
const {createReviews, fetchingReviews} = require("../controllers/reviews");

router.post("/create-reviews/:slug", limiter, authMiddleware, createReviews);
router.get("/user-reviews/:slug", limiter, authMiddleware, fetchingReviews);

module.exports = router;