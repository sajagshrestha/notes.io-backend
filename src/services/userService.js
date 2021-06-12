import User from "../models/User.js";

/**
 * Create User
 *
 * @param {Object} note
 * @returns {Promise}
 */
export const createUser = async (user) => {
	return User.forge(user).save(null, { method: "insert" });
};

/**
 * Get user by email
 *
 * @param {Object} note
 * @returns {Promise}
 */
export const getUserByEmail = async (email) => {
	return User.where({ email }).fetch({ require: false });
};
