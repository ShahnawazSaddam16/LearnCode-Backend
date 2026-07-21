const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    technology: {
      type: String,
      required: true,
      enum: ["html", "css", "javascript", "react", "python"],
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    level: {
      type: String,
      required: true,
      enum: ["beginner", "intermediate", "advanced"],
    },

    duration: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    lessons: {
      type: Number,
      required: true,
    },

    thumbnail: {
      type: String,
      trim: true,
    },

    includes: {
      type: [String],
      required: true,
    },
    githubRepo: {
      type: String,
      required: true
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
