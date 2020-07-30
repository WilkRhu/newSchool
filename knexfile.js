module.exports = {
    production: {
        client: "pg",
        version: "9.6",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + "/src/config/database/migration"
        },
    },

    test: {
        client: "pg",
        version: "9.6",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + "/src/config/database/migration"
        },
    },


};