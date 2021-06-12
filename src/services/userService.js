import User from "../models/User.js";

/**
 * create user
 *
 * @param	{Object}  user
 * @returns	{Promise}
 */
export const createUser = async (user) => {
	return User.forge(user).save(null, { method: "insert" });
};

/**
 * get user by email
 *
 * @param	{Object}  user
 * @returns	{Promise}
 */
export const getUserByEmail = async (email) => {
	return User.where({ email }).fetch({ require: false });
};
