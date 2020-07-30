const connect = require("../../config/connect");
const Subject = require("../../domains/entity/subject");
const subjectValidation = require("../../utils/validations/subject/subjectValidation");


const createSubjects = async (req, res) => {
    try {
        const {name}  = req.body;
        const { error, value } = subjectValidation.validate({name});
        if(!error) {
            const matter = await connect("subject").returning("*").insert(Subject(value));
            return res.status(201).json(matter);
        }
    } catch(error) {
        return res.status(400).json(error);
    }
};

module.exports = createSubjects;