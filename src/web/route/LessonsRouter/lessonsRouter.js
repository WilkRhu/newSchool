const router = require("express").Router();
const controllers = require("../../../controllers");

router.post("/lessons", controllers.createLessons);
router.put("/lessons/:id", controllers.updateLessons);
router.delete("/lessons/:id", controllers.deleteLessons);
router.get("/lessons", controllers.findLessons);
router.get("/lessons/:id", controllers.findIDLessons);

module.exports = router;