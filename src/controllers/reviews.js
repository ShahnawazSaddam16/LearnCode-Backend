const Reviews = require("../models/reviews");
const Course = require("../models/course");

const createReviews = async (req, res) => {
    try {
        const { slug } = req.params;
        const { rating, reviewmessage } = req.body;

        if (!rating || !reviewmessage) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

        const trimmedMessage = reviewmessage.trim();

        if (trimmedMessage.length < 10) {
            return res.status(400).json({
                success: false,
                message: "Review message must be at least 10 characters long."
            });
        }

        if (trimmedMessage.length > 500) {
            return res.status(400).json({
                success: false,
                message: "Review message cannot exceed 500 characters."
            });
        }

        const course = await Course.findOne({
            slug,
            isPublished: true
        });

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            });
        }

        const existingReview = await Reviews.findOne({
            user: req.user._id,
            course: course._id
        });

        if (existingReview) {
            return res.status(400).json({
                success: false,
                message: "You have already reviewed this course."
            });
        }

        const newReview = await Reviews.create({
            user: req.user._id,
            name: req.user.name,
            email: req.user.email,
            course: course._id,
            rating,
            reviewmessage: trimmedMessage
        });

        return res.status(201).json({
            success: true,
            message: "Review submitted successfully.",
            review: newReview
        });

    } catch (err) {
        console.error("Create Review Error:", err);

        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const fetchingReviews = async (req, res) => {
    try {
        const { slug } = req.params;

        const course = await Course.findOne({
            slug,
            isPublished: true
        });

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            });
        }

        const reviews = await Reviews.find({
            course: course._id
        })
        .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: reviews.length,
            reviews
        });

    } catch (err) {
        console.error("Fetch Reviews Error:", err);

        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = { createReviews, fetchingReviews };