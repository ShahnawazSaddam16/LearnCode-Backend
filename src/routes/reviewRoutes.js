const express = require("express");
const router = express.Router();
const {authMiddleware} = require("../middleware/authMiddleware");
const limiter = require("../utils/limiter");
const {createReviews} = require("../controllers/reviews");

router.post("/create-reviews", limiter, authMiddleware, createReviews);

module.exports = router;