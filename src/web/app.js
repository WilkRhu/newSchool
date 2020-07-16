require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routers = require("./route");
const knex = require("knex");
const knexfile = require("../../knexfile");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.db = knex(process.env.NODE_ENV === "test" ? knexfile.test : knexfile.production);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(cors(), routers);

module.exports = app;