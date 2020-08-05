const router = require("express").Router();
const routerApi = require("express").Router();
const userRouter = require("./UserRouter/userRouter");
const adressRouter = require("./AdressRouter/adressRouter");
const seriesRouter = require("./Series/seriesRouter");
const subjectRouter = require("./SubjectRouter/subjectRouter");
const classesRouter = require("./ClassesRouter/classesRouter");

router.use(userRouter, adressRouter, seriesRouter, subjectRouter, classesRouter);

routerApi.use("/", router);

module.exports = routerApi;