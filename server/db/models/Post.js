const mongoose = require('mongoose');
moment = require('moment');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  text: {
    String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

postSchema.methods.toJSON = function () {
  const post = this;
  const postObject = post.toObject();
  if (postObject.dueDate) {
    postObject.dueDate = moment(postObject.dueDate).format('YYYY-MM-DD');
  }
  return postObject;
};

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
