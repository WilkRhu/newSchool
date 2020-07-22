const router = require("express").Router();
const userController = require("../../../controllers");
const upload = require("../../../middleware/uploadPg");
const authUsers = require("../../../middleware/authUsers");


router.post("/users", upload.single("file"), userController.create);
router.get("/users", authUsers, userController.findUsers);
router.get("/users/:id", authUsers, userController.findUserId);
router.patch("/users/:id", authUsers, upload.single("file"), userController.updateUsers);
router.delete("/users/:id", authUsers, userController.deletUsers);
router.post("/singIn", userController.singIn);


module.exports = router;