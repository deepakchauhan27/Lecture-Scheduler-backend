import Course from "../models/Course.js";

export const addCourse = async (req, res) => {
  const { name, level, description, image } = req.body;

  const course = await Course.create({
    name,
    level,
    description,
    image
  });

  res.status(201).json(course);
};

export const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};
