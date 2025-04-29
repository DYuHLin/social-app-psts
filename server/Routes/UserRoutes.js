const user = require('../Controllers/UserController')
const express = require('express')
const passport = require('passport')
const isAuth = require('./IsAuth')

const router = express.Router()

router.post('/register', user.userRegister)
router.post('/login', user.userLogin)
router.get('/allusers', user.getAllUsers)
router.get('/:id/user', user.getUser)
router.put('/:id/updateuser', user.userUpdate)
router.delete('/:id/deleteuser', user.userDelete)

// Google auth
// router.get('/login/success', (req, res, next) => {
//     if(res.user){
//         res.status(200).json({
//             error: false,
//             message: 'Login success',
//             user: req.user,
//         })
//     } else{
//         res.status(403).json({error: true, message: 'Not Authorized'})
//     }
// })

// router.get('/login/failed', (req, res, next) => {
//     res.status(401).json({
//         error: true,
//         message: 'Login failure',
//     })
// })

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