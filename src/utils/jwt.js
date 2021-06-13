import jwt from "jsonwebtoken";

/**
 * Create jwt token
 *
 * @param {Object} payload
 * @returns {Promise}
 */
export const createAccessToken = async (payload) => {
	return new Promise((resolve, reject) => {
		jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
			if (err) reject(err);
			resolve(token);
		});
	});
};

/**
 * Verify jwt token
 *
 * @param {String} token
 * @returns {Promise}
 */
export const verifyToken = async (token) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
			if (err) reject(err);
			resolve(decoded);
		});
	});
};
