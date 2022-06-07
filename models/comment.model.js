import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
  comments: {
    type: Array,
    required: true
  },
  _id: {
    type: String,
    required: true
  }
});
const commentModel = mongoose.model('comments', commentSchema);

export default commentModel;
