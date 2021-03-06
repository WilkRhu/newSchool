exports.up = (knex) => {
    return knex.schema.createTable("series", (t) => {
        t.increments("id").primary();
        t.string("name").unique();
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable("series");
};