exports.up = async (knex) => {
    await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable("address", (t) => {
        t.uuid("id").unique().notNull().primary().defaultTo(knex.raw("uuid_generate_v4()"));
        t.string("user_id").unsigned();
        t.foreign("user_id").references("id");
        t.string("street");
        t.string("number");
        t.string("state");
        t.string("city");
        t.string("neighborhood");
        t.string("reference");
        t.timestamp("create_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable("address");
};