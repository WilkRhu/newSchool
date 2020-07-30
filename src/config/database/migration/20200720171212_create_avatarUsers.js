
exports.up = (knex) => {
  return knex.schema.createTable("file", (t) => {
        t.increments("id").primary();
        t.uuid("user_id").unsigned();
        t.foreign("user_id")
        .references("id").inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        t.string("type");
        t.string("name");
        t.binary("data", 250);
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
  return knex.schema.dropTable("file");
};
