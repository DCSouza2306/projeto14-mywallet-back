import { Router } from "express";
import { signUpBodyValidation } from "../middlewares/singUpBodyValidation.middleware.js";
import { postSignUp } from "../controllers/authController.js";

const router = Router();

router.post("/sign-up",signUpBodyValidation, postSignUp);

export default router;