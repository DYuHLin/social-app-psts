const pool = require('../db/Pool')

const comments = {}

comments.get = async () => {
    const {rows} = await pool.query('select * from comments INNER JOIN users ON posts.poster = user.id;')
    return rows
}

comments.single = async (id) => {
    const {rows} = await pool.query(`SELECT * FROM comments INNER JOIN users ON posts.poster = user.id WHERE id = ${id};`)
    return rows
}

comments.create = async (text, video, link, date, poster, post) => {
    await pool.query(`INSERT INTO comments (text, video, link, date, poster, post) VALUES($1, $2, $3, $4, $5, $6);`, [text, video, link, date, poster, post])
}

comments.delete = async (id) => {
    await pool.query(`DELETE FROM comments WHERE id = ${id};`)
}

comments.update = async (text, video, link, date, poster, post, id) => {
    await pool.query(`UPDATE comments SET text = $1, video = $2, link = $3 date = $4, poster = $5, post = $6 WHERE id = $6;`, [text, video, link, date, poster, post, id])
}