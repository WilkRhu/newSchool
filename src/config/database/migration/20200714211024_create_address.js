exports.up = async (knex) => {
    await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable("adress", (t) => {
        t.uuid("id").unique().notNull().primary().defaultTo(knex.raw("uuid_generate_v4()"));
        t.uuid("user_id").unsigned();
        t.foreign("user_id")
        .references("id").inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        t.string("street");
        t.string("number");
        t.string("state");
        t.string("city");
        t.string("neighborhood");
        t.string("reference");
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable("adress");
};