const asyncHandler = require('express-async-handler')
const likeModel = require('../models/likes')

exports.getAllLikes = asyncHandler(async (req, res, next) => {
    const likes = await likeModel.getLikes(req.params.id)
    return res.json(likes)
})

exports.createLike = asyncHandler(async (req, res, next) => {
    const {post, comment, liker} = req.body

    await likeModel.create(post, comment, liker)
    return res.json('liked')
})

exports.deletePostLike = asyncHandler(async (req, res, next) => {
    await likeModel.deletePostLike(req.body.post, req.params.id)
    return res.json('removed')
})

exports.deleteCommentLike = asyncHandler(async (req, res, next) => {
    await likeModel.deletecommentLike(req.body.comment, req.params.id)
    return res.json('removed')
})