/* eslint-disable no-underscore-dangle */
import _ from 'lodash';
import articleModel from '../models/article.model.js';

const createArticle = async (newArticle) => {
  await articleModel.create(newArticle);
};
const getAllArticles = async () => {
  const allArticles = await articleModel.find();
  return allArticles;
};

const getArticleByName = async (title) => {
  const articleByName = await articleModel.findOne({ title });
  return articleByName;
};

const deleteArticleById = async (id) => {
  const deleteArticle = await articleModel.deleteOne({ _id: id });
  return deleteArticle;
};
const editArticle = async (data) => {
  const _data = _.omit(data, 'id');
  const edit = await articleModel.updateOne({ _id: data.id }, _data, { runValidators: true });
  return edit;
};

export default {
  createArticle,
  getAllArticles,
  getArticleByName,
  deleteArticleById,
  editArticle
};
