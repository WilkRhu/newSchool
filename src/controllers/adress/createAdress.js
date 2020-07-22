const connect = require("../../config/connect");
const addressSchema = require("../../domains/entity/adress");
const adressValidation = require("../../utils/validations/adress/adressValidation");

const createAdress = async (req, res) => {
    try {
        const {
            user_id
        } = req.params;
        const {
            street,
            number,
            city,
            state,
            neighborhood,
            reference
        } = req.body;
        const {
            error,
            value
        } = adressValidation.validate({
            user_id,
            street,
            number,
            city,
            state,
            neighborhood,
            reference
        });
        if (!error) {
            const verifyAdress = await connect("adress").select("*").where("user_id", user_id);
            if (verifyAdress.length === 0) {
                const adress = await connect("adress").returning("*").insert(addressSchema(value));
                return res.status(201).json(adress);
            }
            return res.status(400).json("Registered address, if you want to update");
        }
    } catch (error) {
        return res.status(400).json(error);
    }

};

module.exports = createAdress;