const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model("Contact", contactSchema);