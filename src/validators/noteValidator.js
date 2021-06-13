import Joi from "joi";
import validate from "../utils/validate.js";

const NoteSchema = Joi.object({
	title: Joi.string().max(50).min(4).required(),
	body: Joi.string().max(255),
});

/**
 * Validate req body for note
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const noteValidator = async (req, res, next) => {
	try {
		await validate(req.body, NoteSchema);
		next();
	} catch (err) {
		next(err);
	}
};
