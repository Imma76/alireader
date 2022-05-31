/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-multi-spaces */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import articleService from '../services/articles.services.js';

class ArticleController {
  async createNewArticle(req, res) {
    const {
      title, author, description, user_id
    } = req.body;
    // const completedFields = title !== null && author != null && description != null;

    await articleService.createArticle(req.body);
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
    const articleByName = await articleService.getArticleByName(title);
    if (_.isEmpty(articleByName)) {
      return res.status(404).send({ message: false, body: 'could not find article' });
    }
    return res.status(200).send({ message: true, body: articleByName });
  }

  async editArticlesBy(req, res) {
    const { id, body, description } = req.body;

    const edited = await articleService.editArticle(req.body);
    if (edited.matchedCount === 1) {
      return res.status(200).send({ message: false, body: 'updated successfully' });
    }
    return res.status(404).send({ message: false, body: 'cannot find user to edit' });
  }

  async deleteArticle(req, res) {
    const { id } = req.body;
    const deleted = await articleService.deleteArticleById(id);
    if (deleted.deletedCount === 0) {
      return res.status(404).send({ message: false, body: 'could not find article to delete' });
    }
    return res.status(200).send({ message: true, body: 'article deleted successfully' });
  }

  async getComments(req, res) {
    const { id } = req.body;
    const getAllComments = await articleService.getAllComments(id);
    console.log(getAllComments);
  }

  async addComment(req, res) {
    const { comment, user_id, article_id } = req.body;
    const getAllComments = await articleService.getAllComments(article_id);
    const comments  = getAllComments.comments;
    comments.push({ usercomment: comment, userId: user_id });
    // const newComment = { comments: { commentList }, id };
    const add = await articleService.addComment({ comments }, article_id);
    return res.status(201).send({ message: true, body: 'comment posted successfully' });
  }
}
export default new ArticleController();
