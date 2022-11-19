import joi from 'joi';

export const walletSchema = joi.object({
    name: joi.string().required(),
    value: joi.number().required(),
    description: joi.string().required(),
    type: joi.string().valid("income", "expense"),
    date: joi.required()
})