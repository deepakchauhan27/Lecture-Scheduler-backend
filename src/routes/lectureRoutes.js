import express from "express";
import {
  addLecture,
  getInstructorLectures
} from "../controllers/lectureController.js";
import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, addLecture);
router.get("/my", authMiddleware, getInstructorLectures);

export default router;
