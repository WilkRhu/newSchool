const router = require("express").Router();
const controllers = require("../../../controllers");

router.post("/series", controllers.createSeries);

module.exports = router;