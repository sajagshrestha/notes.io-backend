import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
	const ROUNDS = 10;
	return bcrypt.hash(password, ROUNDS);
};

export const compareHashedPassword = async (password, hashedPassword) => {
	return bcrypt.compare(password, hashedPassword);
};
