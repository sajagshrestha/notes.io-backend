import HttpStatus from "http-status-codes";
import buildError from "../utils/buildError.js";

/**
 * generic Error Handler
 *
 * @param {Error} error
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const genericErrorHandler = (err, req, res, next) => {
	const error = buildError(err);

	res.status(error.code).json({ error });
};

/**
 * Method not allowed error middleware. This middleware should be placed at
 * the very bottom of the middleware stack.
 *
 * @param {Object} req
 * @param {Object} res
 */
export function methodNotAllowed(req, res) {
	res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
		error: {
			code: HttpStatus.METHOD_NOT_ALLOWED,
			message: HttpStatus.getStatusText(HttpStatus.METHOD_NOT_ALLOWED),
		},
	});
}
