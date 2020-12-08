const mongoose = require('mongoose');
moment = require('moment');

const blogSchema = new mongoose.Schema({
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

blogSchema.methods.toJSON = function () {
  const blog = this;
  const blogObject = blog.toObject();
  if (blogObject.dueDate) {
    blogObject.dueDate = moment(blogObject.dueDate).format('YYYY-MM-DD');
  }
  return blogObject;
};

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
