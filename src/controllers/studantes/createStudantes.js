const connect = require("../../config/connect");
const studantesSchema = require("../../domains/entity/studantes");
const studentValidation = require("../../utils/validations/studentsValidation/studentsValidation");

const crateStudantes = async (userId, data) => {
    try {
        const {
            error,
            value
        } = studentValidation.validate({
            user_id: userId,
            series_id: data.series_id,
            number_registration: data.number_registration,
            student_responsible_one: data.student_responsible_one,
            student_responsible_two: data.student_responsible_two,
            date_of_birth: data.date_of_birth

        });
        if(!error) {
            const student = await connect("studantes").returning("*").insert(studantesSchema(value));
            if(student) {
                return student;
            }
        }
        return error;

    } catch (error) {
        return {error: error};
    }
};

module.exports = crateStudantes;