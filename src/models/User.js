import bookshelf from "../db.js";

const User = bookshelf.model("User", {
	tableName: "users",
});

export default User;
