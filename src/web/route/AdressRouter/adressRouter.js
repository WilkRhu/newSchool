const router = require("express").Router();
const adressController = require("../../../controllers");


router.post("/adress/:user_id", adressController.createAdress);
router.put("/adress/:user_id", adressController.updateAdress);
router.get("/adress", adressController.findAdress);

module.exports = router;