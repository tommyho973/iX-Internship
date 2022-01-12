const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

router.get('/posts', feedController.getPosts);
router.post('/post', feedController.createPost);
router.delete('/:id', feedController.deletePost);
router.put('/:id', feedController.updatePost);

module.exports = router;