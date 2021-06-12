import jwt from "jsonwebtoken";

/**
 * Create jwt token
 *
 * @param {Object} payload
 * @returns {String}
 */
export const createAccessToken = (payload) => {
	console.log(process.env.SECRET_KEY);
	return jwt.sign(payload, process.env.SECRET_KEY);
};

/**
 * Verify jwt token
 *
 * @param {String} token
 * @returns {Promise}
 */
export const verifyToken = async (token) => {
	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		return decoded;
	} catch (err) {
		throw err;
	}
};
