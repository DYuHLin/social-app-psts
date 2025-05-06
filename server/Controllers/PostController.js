const asyncHandler = require('express-async-handler')
const postModel = require('../models/posts')
const imageModel = require('../models/images')

exports.getAllPosts = asyncHandler(async (req, res, next) => {
    const posts = await postModel.get()
    const images = await imageModel.getPost()
    for(let i = 0; i < posts.length; i++){
        posts[i].images = []
    }
    const result = posts.map((post) => {
        post.images.push(images.find((img) => {return img.post == post.id}))
        return post
    })
    console.log(result)
    return res.json(posts)
})

exports.getPost = asyncHandler(async (req, res, next) => {
    const post = await postModel.single(req.params.id)
    return res.json(post)
})

exports.createPost = asyncHandler(async (req, res, next) => {
    const {text, video, link, date, poster, youtube} = req.body

    const post = await postModel.create(text, video, link, date, poster, youtube)
    return res.json(post)
})

exports.updatePost = asyncHandler(async (req, res, next) => {
    const {text, video, link, date, poster, youtube} = req.body

    await postModel.update(text, video, link, date, poster, youtube, req.params.id)
    return res.json('updated')
})

exports.deletePost = asyncHandler(async (req, res, next) => {
    await postModel.delete(req.params.id)
    return res.json('deleted')
})