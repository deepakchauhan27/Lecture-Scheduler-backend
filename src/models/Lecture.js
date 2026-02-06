import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    date: { type: String, required: true },
    startTime: { type: String, required: true }, // ADD THIS
    endTime: { type: String, required: true }    // ADD THIS
  },
  { timestamps: true }
);

export default mongoose.model("Lecture", lectureSchema);