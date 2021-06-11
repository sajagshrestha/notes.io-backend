import jwt from "jsonwebtoken";

export const createAccessToken = (payload) => {
	return jwt.sign(payload, process.env.SECRET_KEY);
};
