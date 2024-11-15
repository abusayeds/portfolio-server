import express from "express";

import { CvController } from "./cv-controller";

const router = express.Router();
router.post("/create-cv", CvController.createCV);
router.get("/get-cv", CvController.getCV);
router.put(
  "/update-cv/:id",

  CvController.updateCV
);

export const CvRoutes = router;
