exports.up = (knex) => {
    return knex.schema.createTable("studantes", (t) => {
        t.increments("id").primary();
        t.uuid("user_id").unsigned();
        t.foreign("user_id")
        .references("id").inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        t.integer("series_id").unsigned();
        t.foreign("series_id")
        .references("id").inTable("series")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        t.string("number_registration");
        t.string("student_responsible_one");
        t.string("student_responsible_two");
        t.string("date_of_birth");
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("studantes");
};