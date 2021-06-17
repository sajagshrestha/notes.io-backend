import knexJs from "knex";
import bookshelfJs from "bookshelf";

import knexConfig from "./knexfile.js";

/**
 * Database connection.
 */
const knex = knexJs(
	process.env.NODE_ENV === "production"
		? knexConfig.produciton
		: knexConfig.development
);
const bookshelf = bookshelfJs(knex);

export default bookshelf;
