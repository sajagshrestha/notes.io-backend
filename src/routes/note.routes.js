import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
const router = Router();

router.get("/", authenticate, (req, res) => res.send("only user can access"));

export default router;
