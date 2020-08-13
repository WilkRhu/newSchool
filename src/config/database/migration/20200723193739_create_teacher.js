exports.up = (knex) => {
    return knex.schema.createTable("teachers", (t) => {
        t.increments("id").primary();
        t.uuid("user_id").unsigned();
        t.foreign("user_id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE").references("id").inTable("users");
        t.string("subjects");
        t.string("series");
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("teachers");
};