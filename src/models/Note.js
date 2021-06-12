import bookshelf from "../db.js";
import User from "./User.js";

const Note = bookshelf.model("Note", {
	tableName: "notes",
	hasTimestamps: true,
	user() {
		return this.belongsTo(User, "user_id", "id");
	},
});

export default Note;
