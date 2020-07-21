exports.up = async (knex) => {
    await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable('users', (t) => {
        t.uuid("id").unique().notNull().primary().defaultTo(knex.raw("uuid_generate_v4()"));
        t.string("name").notNull();
        t.string("login").notNull();
        t.string("email").notNull().unique();
        t.string("password").notNull();
        t.string("type").notNull();
        t.timestamp("create_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable("users");
};