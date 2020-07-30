const Joi = require("@hapi/joi");

const matterValidation = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required()

});

module.exports = matterValidation;