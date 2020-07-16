const router = require("express").Router();
const userController = require("../../../controllers/users");
const {upload} = require("../../../middleware/uploadMongo");

router.post("/users", upload.single("file"), userController.create);
router.get("/users", userController.findUsers);
router.get("/users/:id", userController.findUserId);

module.exports = router;