const connect = require("../../config/connect");
const subjectValidation = require("../../utils/validations/subject/subjectValidation");

const updateSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const { error, value } = subjectValidation.validate(req.body);
        if(!error) {
            const updateSub = await connect("subject").returning("*").update(value).where("id", id);
            return res.status(201).json(updateSub);
        }
    } catch(error) {
        return res.status(400).json(error);
    }
};

module.exports = updateSubject;