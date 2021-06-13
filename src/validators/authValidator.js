import Joi from "joi";
import validate from "../utils/validate.js";

const signupSchema = Joi.object({
	email: Joi.string().email().required(),
	username: Joi.string().max(20).min(4).required(),
	password: Joi.string().max(20).min(8).required(),
	repeat_password: Joi.string()
		.max(20)
		.min(8)
		.required()
		.valid(Joi.ref("password"))
		.error((errors) =>
			errors.map((err) => {
				if (err.code === "any.only")
					err.message = "passwords don't match";
				return err;
			})
		),
});

const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().max(20).min(8).required(),
});

/**
 * Validate req body for signup
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const signupValidator = async (req, res, next) => {
	try {
		await validate(req.body, signupSchema);
		next();
	} catch (err) {
		next(err);
	}
};

/**
 * Validate req body for login
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const loginValidator = async (req, res, next) => {
	try {
		await validate(req.body, loginSchema);
		next();
	} catch (err) {
		next(err);
	}
};
