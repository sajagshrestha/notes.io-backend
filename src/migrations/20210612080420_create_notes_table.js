export function up(knex) {
	return knex.schema.createTable("notes", (table) => {
		table.uuid("id").primary().notNullable().unique();
		table.string("title");
		table.string("body");
		table.uuid("user_id").references("id").inTable("users");
		table.timestamps();
	});
}

export function down(knex) {
	return knex.schema.dropTable("notes");
}
