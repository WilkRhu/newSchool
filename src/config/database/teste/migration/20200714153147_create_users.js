exports.up = (knex) => {

    return knex.schema.createTable('users', (t) => {
        t.increments("id").primary();
        t.string("name").notNull();
        t.string("login").notNull();
        t.string("email").notNull();
        t.string("password").notNull();
        t.string("type").notNull();
        t.string("file").notNull();
        t.timestamp("create_at");
        t.timestamp("updated_at");
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable("users");
};