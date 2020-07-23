const router = require("express").Router();
const userController = require("../../../controllers");
const upload = require("../../../middleware/uploadPg");
const { authAdmin } = require("../../../middleware/authUsers");


router.post("/users", upload.single("file"), userController.create);
router.get("/users", authAdmin, userController.findUsers);
router.get("/users/:id", authAdmin, userController.findUserId);
router.patch("/users/:id", authAdmin, upload.single("file"), userController.updateUsers);
router.delete("/users/:id", authAdmin, userController.deletUsers);
router.post("/singIn", userController.singIn);


module.exports = router;