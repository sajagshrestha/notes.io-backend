import Note from "../models/Note.js";

/**
 * Create new note
 *
 * @param {Object} note
 * @returns {Promise}
 */
export const create = async (note) => {
	return Note.forge(note).save(null, { method: "insert" });
};

/**
 * Get all notes of a specific user
 *
 * @param {String} userID
 * @returns {Promise}
 */
export const getUserNotes = async (userID) => {
	return Note.where("user_id", userID)
		.orderBy("created_at", "DESC")
		.fetchAll();
};

/**
 * Get note by id with user info
 *
 * @param {String} noteID
 * @returns {Promise}
 */
export const getNoteByID = async (noteID) => {
	return Note.where("id", noteID).fetch({
		withRelated: ["user"],
		require: false,
	});
};

/**
 * delete a note
 *
 * @param {String} noteID
 * @returns {Promise}
 */
export const deleteNote = async (noteID) => {
	return Note.where("id", noteID).destroy({
		require: false,
	});
};
