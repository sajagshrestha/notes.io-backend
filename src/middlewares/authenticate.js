import HttpStatus from "http-status-codes";
import createError from "http-errors";
import { verifyToken } from "../utils/jwt.js";

/**
 * Authenticate user
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const authenticate = async (req, res, next) => {
	const { authorization } = req.headers;

	const token = authorization && authorization.split(" ")[1];
	if (!token) return res.sendStatus(HttpStatus.UNAUTHORIZED);

	try {
		const decoded = await verifyToken(token);
		req.authenticatedUserID = decoded.id;
		next();
	} catch (error) {
		next(createError.Unauthorized());
	}
};

export default authenticate;
