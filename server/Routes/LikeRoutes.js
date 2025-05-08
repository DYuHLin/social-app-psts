const likes = require('../Controllers/LikeController')
const express = require('express')

const router = express.Router()

router.post('/likepost', likes.createPostLike)
router.post('/likecomment', likes.createCommentLike)
router.get('/allposts', likes.getAllLikes)

module.exports = router