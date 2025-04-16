const asyncHandler = require('express-async-handler')
const imageModel = require('../models/images')

exports.createImage = asyncHandler(async (req, res, next) => {
    const {image, post, comment} = req.body

    await imageModel.create(image, post, comment)
    return res.json('created')
})

exports.deletePostImage = asyncHandler(async (req, res, next) => {
    await imageModel.deletePostImages(req.params.id)
    return res.json('deleted')
})

exports.deleteCommentImage = asyncHandler(async (req, res, next) => {
    await imageModel.deleteCommentImages(req.params.id)
    return res.json('deleted')
})