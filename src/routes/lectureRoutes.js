import express from "express";
import {
  addLecture,
  getInstructorLectures
} from "../controllers/lectureController.js";
import auth from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/", auth, addLecture);
router.get("/my", auth, getInstructorLectures);

export default router;
