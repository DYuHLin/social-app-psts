const pool = require('../db/Pool')

const notifications = {}

notifications.getNotifications = async (id) => {
    const {rows} = await pool.query(`SELECT * FROM notifications INNER JOIN users ON notifications.following = users.id WHERE c_user = ${id};`)
    return rows
}

notifications.create = async (user, following) => {
    await pool.query(`INSERT INTO notifications (c_users, following) VALUES($1, $2);`, [user, following])
}

module.exports = notifications