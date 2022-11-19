import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { getWallet, postWallet } from "../controllers/walletController.js";
import { walletBodyValidation } from "../middlewares/walletBodyValidation.middleware.js";


const router = Router();

router.use(authValidation)

router.get("/wallet", getWallet);

router.post("/launch",walletBodyValidation, postWallet);

export default router;