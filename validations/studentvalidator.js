const Joi = require("joi");

exports.createValidator = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    city: Joi.string().min(3).max(50).required()
});

exports.validate = (Schema, data) => {
    const { error, value } = Schema.validate(data, { abortEarly: false });

    if (error) {
        return {
            success: false,
            errors: error.details.map((err) => ({
                field: err.path[0],
                message: err.message,
            })),
        };
    }

    return { success: true, value };
};