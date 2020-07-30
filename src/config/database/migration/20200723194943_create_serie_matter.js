exports.up = (knex) => {
    return knex.schema.createTable("serie_subject", (t) => {
        t.integer("serie_id").unsigned();
        t.foreign("serie_id").references("id").inTable("series")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        t.integer("subject_id").unsigned();
        t.foreign("subject_id").references("id").inTable("subject")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable("serie_subject");
};