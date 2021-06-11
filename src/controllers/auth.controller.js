import * as userService from "../services/userService.js";
import { v4 as uuid } from "uuid";
import HttpError from "http-errors";
import HttpStatus from "http-status-codes";
import {
	hashPassword,
	compareHashedPassword,
} from "../utils/passwordHasher.js";
import { createAccessToken } from "../utils/jwt.js";

export const signUserUp = async (req, res, next) => {
	try {
		const { email, username, password } = req.body;

		//check if user already has an account
		const user = await userService.getUserByEmail(email);
		if (user) throw new HttpError.Conflict("email already exists");

		const hashedPassword = await hashPassword(password);

		const createdUser = await userService.createUser({
			id: uuid(),
			email,
			username,
			password: hashedPassword,
		});

		const accessToken = createAccessToken({ id: createdUser.get("id") });
		res.status(HttpStatus.CREATED).send({ user: createdUser, accessToken });
	} catch (err) {
		next(err);
	}
};

export const logUserIn = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const user = await userService.getUserByEmail(email);
		if (!user) throw new HttpError.Forbidden("email or password incorrect");

		const passwordMatches = await compareHashedPassword(
			password,
			user.get("password")
		);
		if (!passwordMatches)
			throw new HttpError.Forbidden("email or password incorrect");

		const accessToken = createAccessToken({ id: user.get("id") });
		res.status(HttpStatus.CREATED).send({ user, accessToken });
	} catch (err) {
		next(err);
	}
};
