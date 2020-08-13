const Joi = require("@hapi/joi");

const matterValidation = Joi.object({
    user_id: Joi.string().required(),
    subjects: Joi.string().optional(),
    series: Joi.string().optional()

});

module.exports = matterValidation;