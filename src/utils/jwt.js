import jwt from "jsonwebtoken";

export const createAccessToken = (payload) => {
	return jwt.sign(payload, process.env.SECRET_KEY);
};

export const verifyToken = async (token) => {
	try {
		var decoded = jwt.verify(token, process.env.SECRET_KEY);
		return decoded;
	} catch (err) {
		throw err;
	}
};
