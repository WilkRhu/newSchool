const connect = require("../../config/connect");
const matterValue = require("../../utils/validations/matter");
const Matter = require("../../domains/entity/matter");


const createMatter = async (req, res) => {
    try {
        const { name } = req.body;
        const { error, value } = matterValue.validate({name});
        if(!error) {
            const matter = await connect("matter").returning("*").insert(Matter(value));
            return res.status(201).json(matter);
        }
    } catch(error) {
        return res.status(400).json(error);
    }
};

module.exports = createMatter;