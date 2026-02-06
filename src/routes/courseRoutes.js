import express from "express";
import {
  addCourse,
  getCourses
} from "../controllers/courseController.js";
import authMiddleware from "../middleware/authmiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";


const router = express.Router();

// admin only
router.post("/", authMiddleware, roleMiddleware("admin"), addCourse);
router.get("/", authMiddleware, roleMiddleware("admin"), getCourses);


export default router;
