import { Router } from "express";
import { logUserIn, signUserUp } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", signUserUp);
router.post("/login", logUserIn);

export default router;
