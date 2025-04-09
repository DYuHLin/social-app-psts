const {Pool} = require('pg')

module.exports = new Pool({
    connectionString: 'postgresql://damian:damian1216@localhost:5432/social_app'
})