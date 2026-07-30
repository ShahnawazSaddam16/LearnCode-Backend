const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    email: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reviewmessage: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Reviews", reviewSchema);