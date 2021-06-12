import * as noteService from "../services/noteService.js";
import createError from "http-errors";

/**
 * Authorizes user and also checks if note exists
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const authorize = async (req, res, next) => {
	const userID = req.authenticatedUserID;
	const noteId = req.params.id;

	try {
		const note = await noteService.getNoteByID(noteId);
		if (!note) throw new createError.NotFound("Note does not exist");
		if (userID !== note.get("user_id")) throw new createError.Forbidden();
		next();
	} catch (err) {
		next(err);
	}
};

export default authorize;
