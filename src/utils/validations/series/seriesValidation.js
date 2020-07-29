const Joi = require("@hapi/joi");

const seriesValidation = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required()

});

module.exports = seriesValidation;