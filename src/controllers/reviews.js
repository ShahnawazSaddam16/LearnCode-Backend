const Reviews = require("../models/reviews");
const Course = require("../models/course");

const createReviews = async (req, res) => {
    try {
        const { courseId, rating, reviewmessage } = req.body;

        if (!courseId || !rating || !reviewmessage) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            });
        }

        const existingReview = await Reviews.findOne({
            user: req.user._id,
            course: courseId
        });

        if (existingReview) {
            return res.status(400).json({
                success: false,
                message: "You have already reviewed this course."
            });
        }

        const newReview = await Reviews.create({
            user: req.user._id,
            email: req.user.email,
            course: courseId,
            rating,
            reviewmessage
        });

        return res.status(201).json({
            success: true,
            message: "Review submitted successfully.",
            review: newReview
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

module.exports = { createReviews };