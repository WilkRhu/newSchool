const Joi = require("@hapi/joi");

const studentValidation = Joi.object({
    user_id: Joi.string().required(),
    series_id: Joi.string().required(),
    number_registration: Joi.string(),
    student_responsible_one: Joi.string(),
    student_responsible_two: Joi.string(),
    date_of_birth: Joi.string()

});

module.exports = studentValidation;