import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    description: { type: String },
    image: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
