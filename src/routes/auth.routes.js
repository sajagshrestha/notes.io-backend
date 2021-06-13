import { Router } from "express";
import { logUserIn, signUserUp } from "../controllers/authController.js";
import {
	signupValidator,
	loginValidator,
} from "../validators/authValidator.js";
const router = Router();

router.post("/signup", signupValidator, signUserUp);
router.post("/login", loginValidator, logUserIn);

export default router;
