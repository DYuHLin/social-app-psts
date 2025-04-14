const pool = require('../db/Pool')

const posts = {}

posts.get = async () => {
    const {rows} = await pool.query('select * from posts INNER JOIN users ON posts.poster = user.id INNER JOIN images ON posts.id = images.post;')
    return rows
}

posts.single = async (id) => {
    const {rows} = await pool.query(`SELECT * FROM posts INNER JOIN users ON posts.poster = user.id WHERE id = ${id};`)
    return rows
}

posts.create = async (text, video, link, date, poster) => {
    await pool.query(`INSERT INTO posts (text, video, link, date, poster) VALUES($1, $2, $3, $4, $5);`, [text, video, link, date, poster])
}

posts.delete = async (id) => {
    await pool.query(`DELETE FROM posts WHERE id = ${id};`)
}

posts.update = async (text, video, link, date, poster, id) => {
    await pool.query(`UPDATE posts SET text = $1, video = $2, link = $3 date = $4, poster = $5 WHERE id = $6;`, [text, video, link, date, poster, id])
}

module.exports = posts