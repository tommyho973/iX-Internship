const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  const postQuery = Post.find();
  let fetchedPosts;
  postQuery
    .then((documents) => {
      fetchedPosts = documents;
    })
    .then(() => {
      res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: fetchedPosts,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching posts failed!',
      });
    });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Post created successfully!',
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deletePost = (req, res, next) => {
  Post.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: 'Deletion successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching posts failed!',
      });
    });
};

exports.updatePost = (req, res, next) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      content: req.body.content,
    }
  )
    .then((result) => {
      res.status(200).json({ message: 'Update successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Could not update post!',
      });
    });
};