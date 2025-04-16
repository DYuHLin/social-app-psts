const image = require('../Controllers/ImageController')
const express = require('express')

const router = express.Router()

router.post('/create', image.createImage)
router.delete('/:id/deletepostimage', image.deletePostImage)
router.delete('/:id/deletecommentimage', image.deleteCommentImage)

module.exports = router