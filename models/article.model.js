import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  }
});

const articleModel = mongoose.model('articles', articleSchema);

export default articleModel;
