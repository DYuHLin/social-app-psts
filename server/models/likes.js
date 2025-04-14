const pool = require('../db/Pool')

const likes = {}

likes.getLikes = async (id) => {
    const {rows} = await pool.query(`SELECT * FROM likes INNER JOIN posts ON likes.post = posts.id WHERE liker = ${id};`)
    return rows
}

likes.create = async (image, post, liker) => {
    await pool.query(`INSERT INTO likes (post, comment, liker) VALUES($1, $2, $3);`, [post, comment, liker])
}

likes.deletePostLike = async (id, user) => {
    await pool.query(`DELETE FROM likes WHERE post = ${id} AND liker = ${user};`)
}

likes.deletecommentLike = async (id, user) => {
    await pool.query(`DELETE FROM likes WHERE comment = ${id} AND liker = ${user};`)
}

module.exports = likes