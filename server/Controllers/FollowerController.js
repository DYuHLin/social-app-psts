const asyncHandler = require('express-async-handler')
const followerModel = require('../models/followers')

exports.getUserfollowers = asyncHandler(async (req, res, next) => {
    const posts = await followerModel.getFollower(req.params.id)
    return res.json(posts)
})

exports.getUserFollowing = asyncHandler(async (req, res, next) => {
    const post = await followerModel.getFollowing(req.params.id)
    return res.json(post)
})

exports.addFollow = asyncHandler(async (req, res, next) => {
    const {follower, following} = req.body

    await followerModel.create(follower, following)
    return res.json('added')
})

exports.deletefollow = asyncHandler(async (req, res, next) => {
    await followerModel.delete(req.body.id)
    return res.json('removed')
})