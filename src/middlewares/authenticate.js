import HttpStatus from "http-status-codes";
import createError from "http-errors";
import { verifyToken } from "../utils/jwt.js";
/**
 * authenticate user
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 */
export const authenticate = async (req, res, next) => {
	const { authorization } = req.headers;
	const token = authorization && authorization.split(" ")[1];
	if (!token) return res.sendStatus(HttpStatus.UNAUTHORIZED);

	try {
		const decoded = await verifyToken(token);
		req.authenticatedUserID = decoded.id;
	} catch (error) {
		next(createError.Unauthorized());
	}

	next();
};
