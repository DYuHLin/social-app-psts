const asyncHandler = require('express-async-handler')
const commentModel = require('../models/comments')

exports.getAllComments = asyncHandler(async (req, res, next) => {
    const posts = await commentModel.get(req.params.id)
    return res.json(posts)
})

exports.getComment = asyncHandler(async (req, res, next) => {
    const post = await commentModel.single(req.params.id)
    return res.json(post)
})

exports.createComment = asyncHandler(async (req, res, next) => {
    const {text, video, link, date, poster, post} = req.body

    await commentModel.create(text, video, link, date, poster, post)
    return res.json('created')
})

exports.updateComment = asyncHandler(async (req, res, next) => {
    const {text, video, link, date, poster, post} = req.body

    await commentModel.update(text, video, link, date, poster, post, req.params.id)
    return res.json('updated')
})

exports.deleteComment = asyncHandler(async (req, res, next) => {
    await commentModel.delete(req.params.id)
    return res.json('deleted')
})