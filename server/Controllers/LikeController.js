const asyncHandler = require('express-async-handler')
const likeModel = require('../models/likes')

exports.getAllLikes = asyncHandler(async (req, res, next) => {
    const likes = await likeModel.getLikes(req.params.id)
    return res.json(likes)
})

exports.createPostLike = asyncHandler(async (req, res, next) => {
    const {post, comment, liker} = req.body
    const like = await likeModel.findPostLike(liker, post)

    if(like.length == 0){
        await likeModel.create(post, comment, liker)
        return res.json('liked')
    } else{
        await likeModel.deletePostLike(post, liker)
        return res.json('unlike')
    }
})

exports.createCommentLike = asyncHandler(async (req, res, next) => {
    const {post, comment, liker} = req.body
    const like = await likeModel.findCommentLike(liker, comment)

    if(like.length == 0){
        await likeModel.create(post, comment, liker)
        return res.json('liked')
    } else{
        await likeModel.deletecommentLike(comment, liker)
        return res.json('unlike')
    }
})