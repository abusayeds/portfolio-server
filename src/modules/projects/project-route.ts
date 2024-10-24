import express from "express";
import requestValidation from "../../app/middlwares/validation-request";

import { projectValidation } from "./project-validation";
import { projectController } from "./project.controller";

const router = express.Router();
router.post(
  "/create-project",

  requestValidation(projectValidation.createProjectValidationSchema),
  projectController.createProject
);
router.put(
  "/update-project/:id",

  requestValidation(projectValidation.updateProjectValidationSchema),
  projectController.updateProject
);
router.delete(
  "/delete-project/:id",

  projectController.deleteProject
);
router.get(
  "/all-project",

  projectController.AllProject
);
router.get(
  "/single-project/:id",

  projectController.singleProject
);

export const projectRoutes = router;
