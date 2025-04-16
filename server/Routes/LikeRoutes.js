const likes = require('../Controllers/LikeController')
const express = require('express')

const router = express.Router()

router.post('/create', likes.createLike)
router.get('/allposts', likes.getAllLikes)
router.delete('/deletepostlike', likes.deletePostLike)
router.delete('/deletecommentlike', likes.deleteCommentLike)

module.exports = router