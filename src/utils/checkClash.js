import Lecture from "../models/Lecture.js";

const checkClash = async (instructorId, date) => {
  const existingLecture = await Lecture.findOne({
    instructor: instructorId,
    date
  });

  return !!existingLecture; // true = clash exists
};

export default checkClash;
