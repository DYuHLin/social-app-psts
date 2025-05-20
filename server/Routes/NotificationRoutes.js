const notifications = require('../Controllers/NotificationController')
const express = require('express')

const router = express.Router()

router.get('/allnotifications', notifications.getAllnotifications)
router.delete('/:id/delete', notifications.deleteNotifications)

module.exports = router