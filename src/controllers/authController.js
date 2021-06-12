import * as userService from "../services/userService.js";
import { v4 as uuid } from "uuid";
import createError from "http-errors";
import HttpStatus from "http-status-codes";
import {
	hashPassword,
	compareHashedPassword,
} from "../utils/passwordHasher.js";
import { createAccessToken } from "../utils/jwt.js";

/**
 * create user account
 *
 * @param	{Object} req
 * @param	{Object} res
 * @param	{Function} next
 */
export const signUserUp = async (req, res, next) => {
	const { email, username, password } = req.body;

	try {
		//check if user already has an account
		const user = await userService.getUserByEmail(email);
		if (user) throw new createError.Conflict("email already exists");

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

/**
 * user login
 *
 * @param	{Object} req
 * @param	{Object} res
 * @param	{Function} next
 */
export const logUserIn = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		//check if user exists
		const user = await userService.getUserByEmail(email);
		if (!user)
			throw new createError.Unauthorized("email or password incorrect");

		const passwordMatches = await compareHashedPassword(
			password,
			user.get("password")
		);
		if (!passwordMatches)
			throw new createError.Unauthorized("email or password incorrect");

		const accessToken = createAccessToken({ id: user.get("id") });
		res.status(HttpStatus.CREATED).send({ user, accessToken });
	} catch (err) {
		next(err);
	}
};
