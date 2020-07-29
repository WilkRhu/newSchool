const Joi = require("@hapi/joi");

const studentValidation = Joi.object({
    user_id: Joi.string().required(),
    series_id: Joi.string().required(),
    number_registration: Joi.string(),
    student_resposible_one: Joi.string(),
    student_resposible_two: Joi.string(),
    data_of_birth: Joi.string()

});

module.exports = studentValidation;