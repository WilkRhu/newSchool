const connect = require("../../config/connect");
const studantesSchema = require("../../domains/entity/studantes");
const studentValidation = require("../../utils/validations/studentsValidation/studentsValidation");

const crateStudantes = async (userId, data, next) => {
    try {
        const {
            error,
            value
        } = studentValidation.validate({
            user_id: userId,
            series_id: data.series_id,
            number_registration: data.number_registration,
            student_resposible_one: data.student_resnposible_one,
            student_resposible_two: data.student_responsible_two,
            data_of_birth: data.date_of_birth

        });
        if(!error) {
            const student = await connect("studantes").returning("*").insert(studantesSchema(value));
            if(student) {
                return student;
            }
        }
    } catch (error) {
        return {error: error};
    }
};

module.exports = crateStudantes;