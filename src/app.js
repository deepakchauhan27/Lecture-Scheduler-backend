import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import lectureRoutes from "./routes/lectureRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// ✅ CORS MUST BE FIRST
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://lecture-scheduler-mauve.vercel.app",
    ],
    credentials: true,
  })
);

// ✅ HANDLE PREFLIGHT REQUESTS (THIS WAS MISSING)
app.options("*", cors());

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/lectures", lectureRoutes);
app.use("/api/users", userRoutes);

export default app;
