const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const store = session.MemoryStore()
const socket = require('socket.io')
const passport = require('passport')
const userRoutes = require('./Routes/UserRoutes')
const postRoutes = require('./Routes/PostRoutes')
const commentRoutes = require('./Routes/CommentRoutes')
const imageRoutes = require('./Routes/ImageRoutes')
const followRoutes = require('./Routes/FollowerRoutes')
const likeRoutes = require('./Routes/LikeRoutes')
const notificationRoutes = require('./Routes/NotificationRoutes')
require('dotenv').config()
require('./passport')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({secret: 'cats', cookie: {
   secure: "development" === "production" ? "true" : "auto",
   sameSite: "development" === "production" ? "none" : "lax",
   maxAge: 30 * 24 * 60 * 60 * 1000,
  }, resave: false, saveUninitialized: false, store
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: 'http://localhost:5173',
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

const server = app.listen(3000, () => console.log('app is listening on port 3000'))