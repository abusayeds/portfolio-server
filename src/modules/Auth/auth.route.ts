import { Router } from "express";
import { AuthValidation } from "./auth-validation";
import requestValidation from "../../app/middlwares/validation-request";
import { authController } from "./auth-controller";

const router = Router();

router.post(
  "/auth/signup",
  requestValidation(AuthValidation.registationValidationSchema),
  authController.createUser
);
router.post(
  "/auth/login",
  requestValidation(AuthValidation.loginValidationSchema),
  authController.createAuth
);

export const authRoutes = router;
