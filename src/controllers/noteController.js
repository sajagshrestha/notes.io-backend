import * as noteService from "../services/noteService.js";
import { v4 as uuid } from "uuid";
import HttpStatus from "http-status-codes";

/**
 * Create note
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
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
 * Fetch all user note
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
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

/**
 * Fetch single note
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const fetchSingleNote = async (req, res, next) => {
	const { id } = req.params;
	try {
		const userNote = await noteService.getNoteByID(id);

		res.send(userNote);
	} catch (err) {
		console.log(err);
	}
};

/**
 * edit a note
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const editNote = async (req, res, next) => {
	const noteId = req.params.id;
	const { title, body } = req.body;

	try {
		const editedNote = await noteService.editNoteByID(noteId, title, body);
		res.status(HttpStatus.OK).send(editedNote);
	} catch (err) {
		next(err);
	}
};

/**
 * Delete a note
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const deleteNote = async (req, res, next) => {
	const noteId = req.params.id;
	try {
		const deletedNote = await noteService.deleteNoteByID(noteId);
		res.status(HttpStatus.OK).send(deletedNote);
	} catch (err) {
		next(err);
	}
};
