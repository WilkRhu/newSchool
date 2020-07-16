
const router = require("express").Router();
const routerApi = require("express").Router();
const userRouter = require("./UserRouter/userRouter");

router.use(userRouter);

routerApi.use("/", router);

module.exports = routerApi;