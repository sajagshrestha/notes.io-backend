export function up(knex) {
	return knex.schema.createTable("users", (table) => {
		table.uuid("id").primary().notNullable().unique();
		table.string("email").unique().notNullable();
		table.string("username").notNullable();
		table.string("password").notNullable();
		table.timestamps();
	});
}

export function down(knex) {
	return knex.schema.dropTable("users");
}
