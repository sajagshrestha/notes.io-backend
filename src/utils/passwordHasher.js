import bcrypt from "bcrypt";

/**
 * Create password hash
 *
 * @param {String} password
 * @returns {Promise}
 */
export const hashPassword = async (password) => {
	const ROUNDS = 10;
	return bcrypt.hash(password, ROUNDS);
};

/**
 * Verify hashed password
 *
 * @param {String} password
 * @param {String} hashedPassword
 * @returns {Promise}
 */
export const compareHashedPassword = async (password, hashedPassword) => {
	return bcrypt.compare(password, hashedPassword);
};
