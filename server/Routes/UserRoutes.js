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
    scope: 'profile'
}))

router.get('/google/callback', passport.authenticate('google', {
    session: true,
}), (req, res, next) => {
    res.redirect('http://localhost:5173/')
})

module.exports = router