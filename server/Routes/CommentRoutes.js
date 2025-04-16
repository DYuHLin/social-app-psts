const comment = require('../Controllers/CommentController')
const express = require('express')

const router = express.Router()

router.post('/create', comment.createComment)
router.get('/allcomments', comment.getAllComments)
router.get('/:id/comment', comment.getComment)
router.put('/:id/updatecomment', comment.updateComment)
router.delete('/:id/deletecomment', comment.deleteComment)

module.exports = router