const pool = require('../db/Pool')

const followers = {}

followers.get = async (id) => {
    const {rows} = await pool.query(`SELECT * FROM followers FULL OUTER JOIN users ON followers.follower = users.id WHERE followers.following = ${id};`)
    return rows
}

followers.create = async (follower, following) => {
    await pool.query(`INSERT INTO followers (follower, following) VALUES($1, $2);`, [follower, following])
}

followers.delete = async (id) => {
    await pool.query(`DELETE FROM followers WHERE id = ${id};`)
}