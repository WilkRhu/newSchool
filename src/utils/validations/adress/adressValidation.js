const Joi = require("@hapi/joi");

const adressValidation = Joi.object({
    user_id: Joi.string(),
    street: Joi.string().optional(),
    number: Joi.string().optional(),
    city: Joi.string().optional(),
    state: Joi.string().optional(),
    neighborhood: Joi.string().optional(),
    reference: Joi.string().optional(),
});

module.exports = adressValidation;