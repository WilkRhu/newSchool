
const router = require("express").Router();
const routerApi = require("express").Router();
const userRouter = require("./UserRouter/userRouter");
const adressRouter = require("./AdressRouter/adressRouter");

router.use(userRouter, adressRouter);

routerApi.use("/", router);

module.exports = routerApi;