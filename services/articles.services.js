import articleModel from '../models/article.model.js';

const createArticle = async (newArticle) => {
  await articleModel.create(newArticle);
};
const getAllArticles = async () => {
  const allArticles = await articleModel.find();
  return allArticles;
};

const getArticleByName = async (title) => {
  const articleByName = await articleModel.findOne({ title: title });
  return articleByName;
};

const deleteArticleById = async (id) => {
  const deleteArticle = await articleModel.deleteOne({ _id: id });
  return deleteArticle;
}
export default {
  createArticle,
  getAllArticles,
  getArticleByName,
  deleteArticleById
};
