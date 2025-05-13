const follow = require('../Controllers/FollowerController')
const express = require('express')

const router = express.Router()

router.post('/create', follow.addFollow)
router.get('/followers', follow.getUserfollowers)
router.get('/following', follow.getUserFollowing)

module.exports = router