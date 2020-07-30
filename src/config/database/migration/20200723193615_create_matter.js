exports.up = (knex) => {
    return knex.schema.createTable("subject", (t) => {
        t.increments("id").primary();
        t.string("name");
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("subject");
};