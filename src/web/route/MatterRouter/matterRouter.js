const router = require("express").Router();
const controllers = require("../../../controllers");

router.post("/matter", controllers.createMatter);

module.exports = router;