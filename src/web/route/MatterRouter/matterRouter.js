const router = require("express").Router();
const controllers = require("../../../controllers");

router.post("/matter", controllers.createMatter);
router.put("/matter/:id", controllers.updateMatter);
router.get("/matter", controllers.findMatter);
router.get("/matter/:id", controllers.findMatterId);
router.delete("/matter/:id", controllers.deleteMatter);

module.exports = router;