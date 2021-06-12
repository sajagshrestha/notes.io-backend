import { Router } from "express";
import authRoutes from "./auth.routes.js";
import noteRoutes from "./note.routes.js";
const router = Router();

router.use("/auth", authRoutes);
router.use("/note", noteRoutes);

export default router;
