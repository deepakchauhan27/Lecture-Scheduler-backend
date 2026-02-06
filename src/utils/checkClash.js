import Lecture from "../models/Lecture.js";

const checkClash = async (instructor, date, startTime, endTime) => {
  return await Lecture.findOne({
    instructor,
    date,
    $or: [
      { startTime: { $lt: endTime }, endTime: { $gt: startTime } }
    ]
  });
};

export default checkClash;
