const user = require('../Controllers/UserController')
const express = require('express')
const passport = require('passport')
const isAuth = require('./IsAuth')

const router = express.Router()

router.post('/register', user.userRegister)
router.post('/login', user.userLogin)
router.get('/allusers', user.getAllUsers)
router.get('/:id/user', user.getUser)
router.put('/updateuser', user.userUpdate)
router.delete('/:id/deleteuser', user.userDelete)

router.get('/accountstore', (req, res, next) => {
    if(!req.session.authenticated){
        return false
    } else{
        return res.json(req.session)
    }
})

router.post('/logout', (req, res, next) => {
    req.session.authenticated = false
    delete req.session.user
    res.clearCookie('connect.sid')
    return res.json('logged out')
})

// Google OAuth

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:5173/',
    session: true,
}))

router.get('/account', isAuth,  (req, res, next) => {
    console.log(req.user) 
    return res.json(req.user) 
})

module.exports = router