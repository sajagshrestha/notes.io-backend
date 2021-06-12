import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { createNote, fetchUserNotes } from "../controllers/noteController.js";
const router = Router();

router.post("/", authenticate, createNote);
router.get("/", authenticate, fetchUserNotes);

export default router;
