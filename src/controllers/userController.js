import User from "../models/User.js";

export const getInstructors = async (req, res) => {
  try {
    const instructors = await User.find({ role: "instructor" }).select(
      "-password"
    );
    res.json(instructors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch instructors" });
  }
};
