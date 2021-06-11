import User from "../models/User.js";

export const createUser = async (user) => {
	return User.forge(user).save(null, { method: "insert" });
};

export const getUserByEmail = async (email) => {
	return User.where({ email }).fetch({ require: false });
};
