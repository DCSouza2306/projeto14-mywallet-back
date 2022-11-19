import { Router } from "express";
import { signUpBodyValidation } from "../middlewares/singUpBodyValidation.middleware.js";
import { signInBodyValidation } from "../middlewares/singInBodyValidation.middleware.js";
import { postSignUp, postSignIn } from "../controllers/authController.js";

const router = Router();

router.post("/sign-up",signUpBodyValidation, postSignUp);

router.post("/sign-in", signInBodyValidation, postSignIn)

export default router;