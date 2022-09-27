const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

module.exports = {
  deleteUser: async (req, res) => {
    try {
      //   Find user by id
      let user = await User.find({ _id: req.params.id });
      let post = await Post.find({ user: req.params.id });
      //   Delete user and all their posts and comments from db
      await Comment.remove({ post: post });
      await Post.remove({ user: req.params.id });
      await User.remove({ _id: req.params.id });
      console.log('Deleted User');
      res.redirect('/');
    } catch (err) {
      res.redirect('/profile');
    }
  },
};
