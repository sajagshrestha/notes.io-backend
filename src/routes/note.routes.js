import { Router } from "express";
import authenticate from "../middlewares/authenticate.js";
import authorize from "../middlewares/authorize.js";
import {
	createNote,
	fetchUserNotes,
	deleteNote,
	editNote,
} from "../controllers/noteController.js";
import { noteValidator } from "../validators/noteValidator.js";
const router = Router();

router.post("/", authenticate, noteValidator, createNote);
router.get("/", authenticate, fetchUserNotes);
router.put("/:id", authenticate, authorize, noteValidator, editNote);
router.delete("/:id", authenticate, authorize, deleteNote);

export default router;
