import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, "../", ".env") });

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const knexConfig = {
	client: process.env.DB_CLIENT,
	connection: {
		host: DB_HOST,
		user: DB_USER,
		password: DB_PASSWORD,
		database: DB_DATABASE,
		charset: "utf8",
	},
	migrations: {
		tableName: "knex_migrations",
		directory: "./migrations",
	},
};

export default knexConfig;
