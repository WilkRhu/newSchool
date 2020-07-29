
const router = require("express").Router();
const routerApi = require("express").Router();
const userRouter = require("./UserRouter/userRouter");
const adressRouter = require("./AdressRouter/adressRouter");
const seriesRouter = require("./Series/seriesRouter");

router.use(userRouter, adressRouter, seriesRouter);

routerApi.use("/", router);

module.exports = routerApi;