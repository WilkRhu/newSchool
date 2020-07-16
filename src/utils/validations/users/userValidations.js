const Joi = require("@hapi/joi");

const userValidate = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    login: Joi.string()
        .alphanum()
        .required(),
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: {
                allow: ["com", "net"]
            }
        })
        .required(),
    password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    type: Joi.string()
        .required(),
    file: Joi.string().optional(),

});

module.exports = userValidate;