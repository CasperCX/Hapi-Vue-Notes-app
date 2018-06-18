const Joi = require("joi");

module.exports = {
    createNote (req, h, next) {
        const policy = {
                validate: {
                    payload: {
                        title: Joi.string().required(),
                        body: Joi.string().required()
                    }
                }
            }
        const { error, value } = Joi.validate(req.body, policy)
        if (error) {
            return h.response("error").code(404)
        } else {
            next()
        }
    },

    patchNote (req, h, next) {
        const policy = {
            validate: {
                payload: {
                    title: Joi.string().required(),
                    body: Joi.string().required()
                }
            }
        }
        const { error, value } = Joi.validate(req.body, policy)
        if (error) {
            return h.response("error").code(404)
        } else {
            next()
        }
    }
};
