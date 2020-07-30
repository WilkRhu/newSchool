const router = require("express").Router();
const controllers = require("../../../controllers");

router.post("/subject", controllers.createSubject);
router.put("/subject/:id", controllers.updateSubject);
router.get("/subject", controllers.findSubject);
router.get("/subject/:id", controllers.findSubjectId);
router.delete("/subject/:id", controllers.deleteSubject);

module.exports = router;