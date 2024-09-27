import Joi from "joi";

export const userApiValidator =  Joi.object({
    username: Joi.string().min(5).max(30).required(),
    email: Joi.string().email().required(),
    phoneno: Joi.string().min(10).max(10),
    fullname: Joi.string().max(255),
  });