import express from "express";
import { addCourse, getCourses } from "../controllers/courseController.js";
import auth from "../middleware/authmiddleware.js";
import role from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", auth, role("admin"), addCourse);
router.get("/", auth, getCourses);

export default router;
