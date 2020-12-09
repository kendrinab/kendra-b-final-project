const router = require('express').Router(),
  {
    createPost,
    getSpecificPost,
    getAllPosts,
    updatePost,
    deletePost
  } = require('../../controllers/posts');

router.post('/', createPost);
router.get('/:id', getSpecificPost);
router.get('/', getAllPosts);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
