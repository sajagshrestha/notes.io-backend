import Joi from "joi";
import { isHttpError } from "http-errors";
import HttpStatus from "http-status-codes";

/**
 * Build error response for validation errors.
 *
 * @param   {Error} err
 * @returns {Object}
 */
const buildError = (err) => {
	// Validation errors
	if (Joi.isError(err)) {
		return {
			code: HttpStatus.BAD_REQUEST,
			message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
			details:
				err.details &&
				err.details.map((err) => {
					return {
						message: err.message,
						param: err.path.join("."),
					};
				}),
		};
	}

	// HTTP errors
	if (isHttpError(err)) {
		return {
			code: err.statusCode,
			message: err.message,
		};
	}

	// Return INTERNAL_SERVER_ERROR for all other cases
	return {
		code: HttpStatus.INTERNAL_SERVER_ERROR,
		message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
	};
};

export default buildError;
