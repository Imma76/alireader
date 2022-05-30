import express from 'express';
import articleController from '../controllers/article.controller.js';

const articleRoute = express.Router();

articleRoute.get('/all_articles', articleController.getAllArticles);

articleRoute.get('/find_article', articleController.getArticleByName);
articleRoute.post('/new_article', articleController.createNewArticle);
articleRoute.patch('/edit_article', articleController.editArticlesBy);
articleRoute.delete('/delete_article', articleController.deleteArticle);

export default articleRoute;
