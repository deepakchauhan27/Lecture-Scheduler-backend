import Lecture from "../models/Lecture.js";
import checkClash from "../utils/checkClash.js";

/* ================= ADD LECTURE ================= */
export const addLecture = async (req, res) => {
  try {
    const { course, instructor, date, startTime, endTime } = req.body;

    // ✅ Validate required fields
    if (!course || !instructor || !date) {
      return res.status(400).json({
        message: "Course, Instructor and Date are required",
      });
    }

    // ✅ Check instructor clash
    const clash = await checkClash(instructor, date, startTime, endTime);
    if (clash) {
      return res.status(400).json({
        message: "Instructor already has a lecture scheduled at this time",
      });
    }

    // ✅ Create lecture with correct schema fields
    const lecture = await Lecture.create({
      course,
      instructor,
      date,
      startTime,
      endTime,
    });

    return res.status(201).json({
      success: true,
      message: "Lecture scheduled successfully",
      lecture,
    });
  } catch (error) {
    console.error("Add Lecture Error:", error);
    return res.status(500).json({
      message: "Failed to schedule lecture",
      error: error.message,
    });
  }
};

/* ================= INSTRUCTOR LECTURES ================= */
export const getInstructorLectures = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        message: "Unauthorized access",
      });
    }

    const lectures = await Lecture.find({
      instructor: req.user.id,
    })
      .populate("course", "name")
      .sort({ date: 1 });

    return res.status(200).json(lectures);
  } catch (error) {
    console.error("Get Instructor Lectures Error:", error);
    return res.status(500).json({
      message: "Failed to fetch instructor lectures",
      error: error.message,
    });
  }
};
