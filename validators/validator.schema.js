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
    description: Joi.string().required(),
    author: Joi.string().required(),
    user_id: Joi.string().required()
  });

  getArticleByNameSchema = Joi.object({ title: Joi.string().required() });

  deleteArticleSchema = Joi.object({ id: Joi.string().required() });

  editArticleSchema = Joi.object({
    id: Joi.string().required(),
    title: Joi.string(),
    description: Joi.string()
    
  });

  addCommentSchema = Joi.object({
    user_id: Joi.string().required(),
    comment: Joi.string().required(),
    article_id: Joi.string().required()
  });
}

export default new ValidatorSchema();
