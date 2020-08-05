const router = require("express").Router();
const controllers = require("../../../controllers");

router.post("/series", controllers.createSeries);
router.get("/series", controllers.findSeries);
router.get("/series/:id", controllers.findIDSeries);
router.put("/series/:id", controllers.updateSeries);
router.delete("/series/:id", controllers.deleteSeries);

module.exports = router;