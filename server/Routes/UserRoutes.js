const user = require('../Controllers/UserController')
const express = require('express')

const router = express.Router()

router.post('/register', user.userRegister)
router.post('/login', user.userRegister)
router.get('/allusers', user.getAllUsers)
router.get('/:id/user', user.getUser)
router.put('/:id/updateuser', user.userUpdate)
router.delete('/:id/deleteuser', user.userDelete)

module.exports = router