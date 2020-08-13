const connect = require("../../config/connect");
const teacherValidation = require("../../utils/validations/teacher/teacherValidation");
const Teacher = require("../../domains/entity/teacher");

const createTeacher = async (userId, subjects, series) => {
    try {
        const {error, value} = teacherValidation.validate({
            user_id: userId,
            subjects: subjects,
            series: series
        });
        if(!error) {
            const teacher = await connect("teachers").returning("*").insert(Teacher(value));
            return teacher;
        } else {
            return error;
        }
    } catch(error) {
        return error;
    }
};

module.exports = createTeacher;