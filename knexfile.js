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
            directory: __dirname + "/src/config/database/migration"
        },
    },

    test: {
        client: "pg",
        version: "9.6",
        connection: {
            host: "127.0.0.1",
            user: "postgres",
            password: "123",
            database: "school_test"
        },
        migrations: {
            directory: __dirname + "/src/config/database/migration"
        },
    },


};