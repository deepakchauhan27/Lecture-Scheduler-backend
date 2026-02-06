import express from "express";
import {
  addCourse,
  getCourses
} from "../controllers/courseController.js";
import authMiddleware from "../middleware/authMiddleware.js";import roleMiddleware from "../middleware/roleMiddleware.js";


const router = express.Router();

// admin only
router.post("/", authMiddleware, roleMiddleware("admin"), addCourse);
router.get("/", authMiddleware, getCourses);

export default router;
