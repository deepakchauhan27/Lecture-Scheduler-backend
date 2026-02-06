import Lecture from "../models/Lecture.js";

const checkClash = async (instructor, date, startTime, endTime) => {
  const existing = await Lecture.findOne({
    instructor,
    date,
    $or: [
      {
        startTime: { $lt: endTime },
        endTime: { $gt: startTime }
      }
    ]
  });
  
  return existing;
};

export default checkClash;