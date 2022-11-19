import joi from 'joi';

export const walletSchema = joi.object({
    email: joi.string().email().required(),
    value: joi.number().required(),
    description: joi.string().required(),
    type: joi.string().valid("income", "expense"),
    date: joi.date().required()
})