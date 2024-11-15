import { Router } from "express";
import { authRoutes } from "../modules/Auth/auth.route";
import { projectRoutes } from "../modules/projects/project-route";
import { blogsRoutes } from "../modules/features/blog-route";
import { CvRoutes } from "../modules/Cv/Cv-route";

const router = Router();
router.use("/api/v1", authRoutes);
router.use("/api/v1", projectRoutes);
router.use("/api/v1", blogsRoutes);
router.use("/api/v1", CvRoutes);

export default router;
