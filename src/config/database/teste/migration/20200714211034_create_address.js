exports.up = async (knex) => {

    return knex.schema.createTable("address", (t) => {
        t.increments("id").unique().primary();
        t.string("user_id").unsigned();
        t.foreign("user_id").references("id");
        t.string("street");
        t.string("number");
        t.string("state");
        t.string("city");
        t.string("neighborhood");
        t.string("reference");
        t.timestamp("create_at");
        t.timestamp("updated_at");
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable("address");
};