const pool = require('../db/Pool')

const images = {}

images.getPost = async () => {
    const {rows} = await pool.query(`SELECT * FROM images INNER JOIN posts ON images.post = posts.id;`)
    return rows
}

images.getComment = async () => {
    const {rows} = await pool.query(`SELECT * FROM images INNER JOIN posts ON images.comments = comments.id;`)
    return rows
}

images.create = async (image, post, comment) => {
    await pool.query(`INSERT INTO images (image, post, comment) VALUES($1, $2, $3);`, [image, post, comment])
}

images.deletePost = async (id) => {
    await pool.query(`DELETE FROM images WHERE post = ${id};`)
}

images.deleteComment = async (id) => {
    await pool.query(`DELETE FROM images WHERE comment = ${id};`)
}