import commentModel from '../models/comment.model.js';

const getAllComments = async (id) => {
  const allComments = await commentModel.findById(id);
  return allComments;
};

const addComment = async (data, articleId) => {
  const add = await commentModel.updateOne(
    { _id: articleId },
    data,
    { runValidators: true }
  );
  return add;
};

const postComment = async (comments, _id) => {
    console.log(comments);
  const getCommentsById = await commentModel.findById(_id);
    const fetchComments = await getAllComments(_id);
//    console.log(fetchComments);
  if (fetchComments === null) {
    await commentModel.create({ _id, comments });
  }
  await commentModel.updateOne({ _id:_id }, { comments: comments }, { runValidators: true });
  // console.log()
};
export default {
  getAllComments,
  addComment,
  postComment
};
