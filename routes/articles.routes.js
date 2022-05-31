import express from 'express';
import articleController from '../controllers/article.controller.js';
import validator from '../validators/validator.js';
import validatorSchema from '../validators/validator.schema.js';

const articleRoute = express.Router();

articleRoute.get('/all_articles', articleController.getAllArticles);

articleRoute.get('/find_article',[validator(validatorSchema.getArticleByNameSchema)], articleController.getArticleByName);
articleRoute.post('/new_article', [validator(validatorSchema.createArticleSchema)], articleController.createNewArticle);
articleRoute.patch('/edit_article', [validator(validatorSchema.editArticleSchema)], articleController.editArticlesBy);
articleRoute.delete('/delete_article', [validator(validatorSchema.deleteArticleSchema)], articleController.deleteArticle);
articleRoute.patch('/add_comment', [validator(validatorSchema.addCommentSchema)], articleController.addComment);
articleRoute.get('/get_comment', articleController.getComments);

export default articleRoute;
