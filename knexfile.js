module.exports = {
    production: {
        client: "pg",
        version: "9.6",
        connection: {
            host: "127.0.0.1",
            user: "postgres",
            password: "123",
            database: "school1"
        },
        migrations: {
            directory: "src/config/database/migration"
        },
    },

    test: {
        client: "sqlite3",
        connection: {
            filename: "./src/config/database/bancotest.sqlite"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "src/config/database/teste/migration"
        }
    },


}