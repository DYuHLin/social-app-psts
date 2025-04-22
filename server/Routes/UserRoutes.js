const user = require('../Controllers/UserController')
const express = require('express')
const passport = require('passport')

const router = express.Router()

router.post('/register', user.userRegister)
router.post('/login', user.userRegister)
router.get('/allusers', user.getAllUsers)
router.get('/:id/user', user.getUser)
router.put('/:id/updateuser', user.userUpdate)
router.delete('/:id/deleteuser', user.userDelete)

// Google auth
router.get('/login/success', (req, res, next) => {
    if(res.user){
        res.status(200).json({
            error: false,
            message: 'Login success',
            user: req.user,
        })
    } else{
        res.status(403).json({error: true, message: 'Not Authorized'})
    }
})

router.get('/login/failed', (req, res, next) => {
    res.status(401).json({
        error: true,
        message: 'Login failure',
    })
})

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:5173/',
    failureRedirect: '/login/failed',
}))

router.get('/google', passport.authenticate('google', ['profile', 'email']))

router.get('/logout', (req, res, next) => {
    req.logOut()
    res.redirect('http://localhost:5173/gettingstarted')
})

module.exports = router