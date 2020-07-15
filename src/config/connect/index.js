const knex = require("knex");
const configuration = require("../../../knexfile");
console.log(process.env.NODE_ENV);
const connection = knex(process.env.NODE_ENV === "test" ? configuration.test :  configuration.production);

module.exports = connection;