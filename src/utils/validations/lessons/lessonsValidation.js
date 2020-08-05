const Joi = require("@hapi/joi");

const lessonsValidation = Joi.object({
    serie_id: Joi.string().required(),
    subject_id: Joi.string().required(),
    title: Joi.string(),
    content: Joi.string(),
    link: Joi.string()

});

module.exports = lessonsValidation;