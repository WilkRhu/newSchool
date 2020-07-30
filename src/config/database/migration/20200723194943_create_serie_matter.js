exports.up = (knex) => {
    return knex.schema.createTable("serie_matter", (t) => {
        t.integer("serie_id").unsigned();
        t.foreign("serie_id").references("id").inTable("series")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        t.integer("matter_id").unsigned();
        t.foreign("matter_id").references("id").inTable("matter")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable("serie_matter");
};