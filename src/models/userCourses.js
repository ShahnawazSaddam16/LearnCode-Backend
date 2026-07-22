const mongoose = require("mongoose");

const userCoursesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["free", "stripe"],
      default: "free",
    },
    transactionId: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

userCoursesSchema.index(
  { user: 1, course: 1 },
  { unique: true, partialFilterExpression: { status: "completed" } }
);

module.exports = mongoose.model("UserCourses", userCoursesSchema);