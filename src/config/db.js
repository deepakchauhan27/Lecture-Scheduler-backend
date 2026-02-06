import mongoose from "mongoose";
import Course from "../models/Course.js"; // REMOVE THIS - wrong place

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error.message);
    process.exit(1);
  }
};

// REMOVE Course imports and exports - they don't belong here
export default connectDB;