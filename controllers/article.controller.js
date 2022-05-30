/* eslint-disable class-methods-use-this */
import bycrypt from 'bcrypt';
import _ from 'lodash';
import articleService from '../services/articles.services.js';
import validatorSchema from '../validators/validator.schema.js';
import validator from '../validators/validator.js';

class ArticleController {
  async createNewArticle(req, res) {
    const { title, author, description } = req.body;
    const completedFields = title !== null && author != null && description != null;
    if (!completedFields) {
      return res.status(400).json({ status: false, body: 'make sure all fields are complete' });
    }
    const articleData = {
      author, title, description
    };
    await articleService.createArticle(articleData);
    return res.status(201).json({ status: true, body: 'article posted sucessfully' });
  }

  async getAllArticles(req, res) {
    const allArticles = await articleService.getAllArticles();
    if (_.isEmpty(allArticles)) {
      return res.status(404).send({ message: true, body: 'no article was found' });
    }
    return res.status(200).send({ message: true, body: allArticles });
  }

  async getArticleByName(req, res) {
    const { title } = req.body;
    await validator(validatorSchema.getArticleByNameSchema, req.body);
    const articleByName = await articleService.getArticleByName(title);
    if (_.isEmpty(articleByName)) {
      return res.status(404).send({ message: false, body: 'could not find article' });
    }
    return res.status(200).send({ message: true, body: articleByName });
  }

  async editArticlesBy(req, res) {

  }

  async deleteArticle(req, res) {
    const { id } = req.body;
    await validator(validatorSchema.deleteArticleSchema, req.body);
    const deleted = await articleService.deleteArticleById(id);
    if (deleted.deletedCount === 0) {
      return res.status(404).send({ message: false, body: 'could not find article to delete' });
    }
    return res.status(200).send({ message: true, body: 'article deleted successfully' });
  }
}
export default new ArticleController();
