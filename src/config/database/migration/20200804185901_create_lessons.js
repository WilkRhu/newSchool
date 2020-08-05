
exports.up = (knex) => {
    return knex.schema.createTable("lessons", (t) => { 
        t.increments("id").primary();
        t.integer("serie_id").unsigned();
        t.foreign("serie_id").references("id").inTable("series")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        t.integer("subject_id").unsigned();
        t.foreign("subject_id").references("id").inTable("subject")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        t.string("title");
        t.text("content", "longtext");
        t.string("link");
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
  
};
