import express from "express";
import { getInstructors } from "../controllers/userController.js";
import authMiddleware from "../middleware/authmiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js"; // FIXED: was "role"

const router = express.Router();

router.get(
  "/instructors",
  authMiddleware,
  roleMiddleware("admin"),
  getInstructors
);

export default router;