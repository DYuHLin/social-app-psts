const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const userRoutes = require('./Routes/UserRoutes')
const postRoutes = require('./Routes/PostRoutes')
const commentRoutes = require('./Routes/CommentRoutes')
const imageRoutes = require('./Routes/ImageRoutes')
const followRoutes = require('./Routes/FollowerRoutes')
const likeRoutes = require('./Routes/LikeRoutes')
const notificationRoutes = require('./Routes/NotificationRoutes')
const pool = require('./db/Pool')
require('dotenv').config()
require('./passport')
require('./passportLocal')

const app = express()
const pgSession = require('connect-pg-simple')(session)

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({store: new pgSession({
    pool: pool,
    tableName: 'user_sessions'
    }),
    secret: 'cats', cookie: {
   secure: "development" === "production" ? "true" : "auto",
   sameSite: "development" === "production" ? "none" : "lax",
   maxAge: 1000 * 60 * 60 * 6,
  }, resave: false, saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: process.env.FRONTEND,
    credentials: true,
    methods: ['GET','PUT','POST','DELETE'],
    optionSuccessStatus:200,
}))

app.use('/api/auth', userRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)
app.use('/api/image', imageRoutes)
app.use('/api/follow', followRoutes)
app.use('/api/likes', likeRoutes)
app.use('/api/notifications', notificationRoutes)

const server = app.listen(process.env.PORT, () => console.log(`app is listening on port ${process.env.PORT}`))