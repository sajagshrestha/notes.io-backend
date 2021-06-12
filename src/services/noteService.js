import Note from "../models/Note.js";

/**
 * create new note
 *
 * @param	{Object} note
 * @returns	{Promise}
 */
export const create = async (note) => {
	return Note.forge(note).save(null, { method: "insert" });
};

/**
 * get all notes of a user
 *
 * @param	{String} id
 * @returns	{Promise}
 */
export const getUserNotes = async (id) => {
	return Note.where("user_id", id)
		.orderBy("created_at", "DESC")
		.fetchAll({ withRelated: ["user"] });
};
