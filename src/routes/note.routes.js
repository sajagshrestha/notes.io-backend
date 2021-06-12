import { Router } from "express";
import authenticate from "../middlewares/authenticate.js";
import authorize from "../middlewares/authorize.js";
import {
	createNote,
	fetchUserNotes,
	deleteNote,
} from "../controllers/noteController.js";
const router = Router();

router.post("/", authenticate, createNote);
router.get("/", authenticate, fetchUserNotes);
router.delete("/:id", authenticate, authorize, deleteNote);

export default router;
