const connect = require("../../config/connect");
const matterValidation = require("../../utils/validations/matter/matterValidation");

const updateMatte = async (req, res) => {
    try {
        const { id } = req.params;
        const { error, value } = matterValidation.validate(req.body);
        if(!error) {
            const update = await connect("matter").returning("*").update(value).where("id", id);
            return res.status(201).json(update);
        }
    } catch(error) {
        return res.status(400).json(error);
    }
};

module.exports = updateMatte;