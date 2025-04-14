const pool = require('../db/Pool')

const likes = {}

likes.getPost = async () => {
    const {rows} = await pool.query(`SELECT * FROM images INNER JOIN posts ON images.post = posts.id;`)
    return rows
}

likes.getComment = async () => {
    const {rows} = await pool.query(`SELECT * FROM images INNER JOIN posts ON images.comments = comments.id;`)
    return rows
}

likes.create = async (image, post, comment) => {
    await pool.query(`INSERT INTO likes (image, post, comment) VALUES($1, $2, $3);`, [image, post, comment])
}

likes.deletePost = async (id) => {
    await pool.query(`DELETE FROM likes WHERE post = ${id};`)
}

likes.deleteComment = async (id) => {
    await pool.query(`DELETE FROM likes WHERE comment = ${id};`)
}