/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import _ from 'lodash';
import commentServices from '../services/comment.services.js';

class CommentController {
  async addComment(req, res) {
    const { comment, user_id, article_id } = req.body;
    const getAllComments = await commentServices.getAllComments(article_id);
    if (_.isEmpty(getAllComments)) {
      const comments = [];
      comments.push({ usercomment: comment, userId: user_id });
      // const newComment = { comments: { commentList }, id };
      await commentServices.postComment(comments, article_id);
      return res.status(201).send({ message: true, body: 'comment posted successfully' });
    }
    const { comments } = getAllComments;
    comments.push({ usercomment: comment, userId: user_id });
    // const newComment = { comments: { commentList }, id };
    await commentServices.postComment(comments, article_id);
    return res.status(201).send({ message: true, body: 'comment posted successfully' });
  }

  async getComments(req, res) {
    // const { id } = req.param.id;
    const getAllComments = await commentServices.getAllComments(req.params.id);
    if (getAllComments === null) {
      return res.status(404).send({ message: false, body: 'invalid article id to get comment' });
    }
    return res.status(200).send({ message: true, body: getAllComments.comments });
  }
}
export default new CommentController();
