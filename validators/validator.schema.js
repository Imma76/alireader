import Joi from 'joi';

class ValidatorSchema {
  createUserSchema = Joi.object({
    fullname: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim()
  });

  loginUserSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  });

  createArticleSchema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().required(),
    authorName: Joi.string().required()
  });

  getArticleByNameSchema = Joi.object({ title: Joi.string().required() });

  deleteArticleSchema = Joi.object({ id: Joi.string().required() });
}

export default new ValidatorSchema();
