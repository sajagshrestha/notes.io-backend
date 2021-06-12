import bookshelf from "../db.js";
import Note from "./Note.js";
const User = bookshelf.model("User", {
	tableName: "users",
	hidden: ["password"],
	hasTimestamps: true,
	notes() {
		return this.hasMany(Note, "id", "user_id");
	},
});

export default User;
