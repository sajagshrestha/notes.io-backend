import * as noteService from "../services/noteService.js";
import { v4 as uuid } from "uuid";
import HttpStatus from "http-status-codes";

/**
 * create note
 *
 * @param	{Object} req
 * @param	{Object} res
 * @param	{Function} next
 */
export const createNote = async (req, res, next) => {
	const userID = req.authenticatedUserID;
	const { title, body } = req.body;
	try {
		const createdNote = await noteService.create({
			id: uuid(),
			title,
			body,
			user_id: userID,
		});
		res.status(HttpStatus.CREATED).send(createdNote);
	} catch (err) {
		next(err);
	}
};

/**
 * fetch all user notes
 *
 * @param	{Object} req
 * @param	{Object} res
 * @param	{Function} next
 */
export const fetchUserNotes = async (req, res, next) => {
	const userID = req.authenticatedUserID;
	try {
		const userNotes = await noteService.getUserNotes(userID);
		res.send(userNotes);
	} catch (err) {
		console.log(err);
	}
};
