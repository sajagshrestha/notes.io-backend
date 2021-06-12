import jwt from "jsonwebtoken";

/**
 * create jwt token
 *
 * @param {Object} payload
 * @returns {String}
 */
export const createAccessToken = (payload) => {
	return jwt.sign(payload, process.env.SECRET_KEY);
};

/**
 * verify jwt token
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
