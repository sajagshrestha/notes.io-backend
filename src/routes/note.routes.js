import { Router } from "express";
import authenticate from "../middlewares/authenticate.js";
import authorize from "../middlewares/authorize.js";
import {
	createNote,
	fetchUserNotes,
	deleteNote,
	editNote,
} from "../controllers/noteController.js";
const router = Router();

router.post("/", authenticate, createNote);
router.get("/", authenticate, fetchUserNotes);
router.put("/:id", authenticate, authorize, editNote);
router.delete("/:id", authenticate, authorize, deleteNote);

export default router;
