const asyncHandler = require('express-async-handler')
const userModel = require('../models/users')
const bcrypt = require('bcryptjs')
const token = require('./Token')

exports.userRegister = asyncHandler(async (req, res, next) => {
    try{
        const user = await userModel.exist()
        if(user){
            return res.json('Username has been taken')
        } else {
            bcrypt.hash(req.body.password, 10, async (err, hashed) => {
                if(err){
                    return next(err)
                } else {
                    newUser = await userModel.create(req.body.username, hashed, req.body.description, image)
                    return res.json('success')
                }
            })
        }
    } catch(err){
        next(err)
    }
})

exports.userLogin = asyncHandler(async (req, res, next) => {
    try{
        const user = await userModel.exist()
        if(!user){
            return res.json('invalid username')
        }

        const match = await bcrypt.compare(req.body.password, user.password)
        if(!match){
            return res.json('invalid password')
        } 

        const accessToken = token.getAccessToken(user)
        const refreshToken = token.getRefreshToken(user)
        token.refreshTokens.push(refreshToken)

        return res.json({accessToken, refreshToken})
    } catch(err){
        next(err)
    }
})

exports.userUpdate = asyncHandler(async (req, res, next) => {
    try{
        
    } catch(err){
        next(err)
    }
})

exports.getAllUsers = asyncHandler(async (req, res, next) => {

})

exports.getUser = asyncHandler(async (req, res, next) => {

})

exports.userDelete = asyncHandler(async (req, res, next) => {

})