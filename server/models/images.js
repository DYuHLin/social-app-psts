const pool = require('../db/Pool')

const images = {}

images.create = async (image, post, comment) => {
    await pool.query(`INSERT INTO images (image, post, comment) VALUES($1, $2, $3);`, [image, post, comment])
}

images.deletePostImages = async (id) => {
    await pool.query(`DELETE FROM images WHERE post = ${id};`)
}

images.deleteCommentImages = async (id) => {
    await pool.query(`DELETE FROM images WHERE comment = ${id};`)
}