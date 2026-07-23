const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    technology: { type: String, required: true },
    order: { type: Number, required: true },
    title: { type: String, required: true },
    theory: { type: String, required: true },
    code: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lesson", lessonSchema);