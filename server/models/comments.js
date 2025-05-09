const pool = require('../db/Pool')

const comments = {}

comments.get = async (id) => {
    const {rows} = await pool.query(`select comments.id, comments.text, comments.video, comments.link, comments.youtube, comments.date, comments.post, users.username, 
        users.id AS userId from comments INNER JOIN users ON comments.poster = users.id WHERE comments.post = ${id};`)
    return rows
}

comments.single = async (id) => {
    const {rows} = await pool.query(`SELECT * FROM comments INNER JOIN users ON posts.poster = user.id INNER JOIN images ON comments.id = images.comment WHERE id = ${id};`)
    return rows
}

comments.create = async (text, video, link, date, poster, post, youtube) => {
    await pool.query(`INSERT INTO comments (text, video, link, date, poster, post, youtube) VALUES($1, $2, $3, $4, $5, $6, $7);`, 
        [text, video, link, date, poster, post, youtube])
}

comments.delete = async (id) => {
    await pool.query(`DELETE FROM comments WHERE id = ${id};`)
}

comments.update = async (text, video, link, date, poster, post, id) => {
    await pool.query(`UPDATE comments SET text = $1, video = $2, link = $3 date = $4, poster = $5, post = $6 WHERE id = $6;`, [text, video, link, date, poster, post, id])
}

module.exports = comments