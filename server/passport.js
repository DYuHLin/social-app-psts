const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')
const pool = require('./db/Pool')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_ID,
    callbackURL: "/auth/google/callback",
    scope: ['profile', 'email'],
    response_type: 'application/json'
  },
  async (accessToken, refreshToken, profile, done) => {
    const account = profile._json
    let user = {}
    try{
      const currentUserQuery = await pool.query(`SELECT * FROM users WHERE google_id = ${account.sub};`)
      if (currentUserQuery.rows.length > 0){
        user = {
          id: currentUserQuery.rows.id,
          google_id: currentUserQuery.rows.google_id,
          username: currentUserQuery.rows.username,
          image: currentUserQuery.rows.image
        } 
      } else {
          await pool.query(`INSERT INTO users (username, password, description, image, google_id) VALUES ($1, $2, $3, $4, $5);`, 
          [account.name, null, null, account.picture, account.sub])
          const newUserQuery = await pool.query(`SELECT * FROM users WHERE google_id = ${account.sub};`)
          user = {
            id: newUserQuery.rows.id,
            google_id: account.sub,
            username: account.name,
            image: account.picture
          } 
      }
      done(null, user)
    }catch(err){
      done(err, false, err.message)
    }
  }
))

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})