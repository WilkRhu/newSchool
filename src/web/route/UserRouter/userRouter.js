const router = require("express").Router();
const userController = require("../../../controllers/users");


router.post("/users", userController.create);
router.get("/users", userController.findUsers);
router.get("/users/:id", userController.findUserId);
router.patch("/users/:id", userController.updateUsers);
router.delete("/users/:id", userController.deletUsers);


module.exports = router;