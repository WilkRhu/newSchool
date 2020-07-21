
exports.up = (knex) => {
  return knex.schema.createTable("file", (t) => {
        t.increments("id").primary();
        t.string("user_id").unsigned();
        t.foreign("user_id").references("id");
        t.string("type");
        t.string("name");
        t.binary("data", 250);
        t.timestamp("create_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
  return knex.schema.dropTable("file");
};
