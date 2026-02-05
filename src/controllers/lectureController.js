import Lecture from "../models/Lecture.js";
import checkClash from "../utils/checkClash.js";

export const addLecture = async (req, res) => {
  const { courseId, instructorId, date } = req.body;

  const clash = await checkClash(instructorId, date);
  if (clash) {
    return res.status(400).json({
      message: "Instructor already assigned on this date"
    });
  }

  const lecture = await Lecture.create({
    course: courseId,
    instructor: instructorId,
    date
  });

  res.status(201).json(lecture);
};

export const getInstructorLectures = async (req, res) => {
  const lectures = await Lecture.find({ instructor: req.user.id })
    .populate("course", "name");

  res.json(lectures);
};
