const Joi = require("@hapi/joi");

const matterValidation = Joi.object({
    user_id: Joi.string().required(),
    matter_id: Joi.string().required()

});

module.exports = matterValidation;