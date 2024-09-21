import Joi from "joi";

export const testApiValidator =  Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(18).max(99),
  });