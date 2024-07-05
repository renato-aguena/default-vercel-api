import Joi from "joi";

export const createSchema = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(5).max(22),
  password: Joi.string().min(8).max(32).required(),
  state: Joi.string().min(2).max(2).required(),
  crm: Joi.string().min(7).max(13).required(),
});
