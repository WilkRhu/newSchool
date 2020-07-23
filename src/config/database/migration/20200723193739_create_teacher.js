exports.up = (knex) => {
    return knex.schema.createTable("teachers", (t) => {
        t.increments("id").primary();
        t.string("user_id").unsigned();
        t.foreign("user_id").references("id");
        t.integer("matter_id").unsigned();
        t.foreign("matter_id").references("id");
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("teachers");
};