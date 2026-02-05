import express from "express";
import { getInstructors } from "../controllers/userController.js";
import auth from "../middleware/authmiddleware.js";
import role from "../middleware/roleMiddleware.js";

const router = express.Router();

// Admin can view instructors
router.get(
  "/instructors",
  auth,
  role("admin"),
  getInstructors
);

export default router;
