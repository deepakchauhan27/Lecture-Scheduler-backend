import express from "express";
import {
  addLecture,
  getInstructorLectures
} from "../controllers/lectureController.js";
import authMiddleware from "../middleware/authmiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("admin"), addLecture);
router.get("/my", authMiddleware, roleMiddleware("instructor"), getInstructorLectures);

export default router;
