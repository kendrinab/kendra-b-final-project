const router = require('express').Router(),
  {
    createPost,
    getAllPosts,
    getSpecificPost,
    updatePost,
    deletePost
  } = require('../../controllers/posts');

router.post('/', createPost);
router.get('/:id', getSpecificPost);
router.get('/', getAllPosts);
router.post('/:id', updatePost);
router.put('/:id', deletePost);

module.exports = router;
