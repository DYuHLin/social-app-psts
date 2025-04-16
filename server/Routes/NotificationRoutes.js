const notifications = require('../Controllers/NotificationController')
const express = require('express')

const router = express.Router()

router.post('/create', notifications.createNotifications)
router.get('/allnotifications', notifications.getAllnotifications)

module.exports = router