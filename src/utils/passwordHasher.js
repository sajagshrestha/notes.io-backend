import bcrypt from "bcrypt";

/**
 * create password hash
 *
 * @param {String} password
 * @returns {Promise}
 */
export const hashPassword = async (password) => {
	const ROUNDS = 10;
	return bcrypt.hash(password, ROUNDS);
};

/**
 * verify hashed password
 *
 * @param {String} password
 * @param {String} hashedPassword
 * @returns {Promise}
 */
export const compareHashedPassword = async (password, hashedPassword) => {
	return bcrypt.compare(password, hashedPassword);
};
