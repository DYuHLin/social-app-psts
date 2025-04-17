const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const socket = require('socket.io')
const userRoutes = require('./Routes/UserRoutes')
const postRoutes = require('./Routes/PostRoutes')
const commentRoutes = require('./Routes/CommentRoutes')
const imageRoutes = require('./Routes/ImageRoutes')
const followRoutes = require('./Routes/FollowerRoutes')
const likeRoutes = require('./Routes/LikeRoutes')
const notificationRoutes = require('./Routes/NotificationRoutes')
require('dotenv').config()

const app = express()

app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    optionsSuccessStatus: true,
}))

app.use(express.json({limit: '50mb', extended: true}))
app.use(session({secret: 'cats', resave: false, saveUninitialized: true}))
app.use(cookieParser())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)
app.use('/api/image', imageRoutes)
app.use('/api/follow', followRoutes)
app.use('/api/likes', likeRoutes)
app.use('/api/notifications', notificationRoutes)

const server = app.listen(3000, () => console.log('app is listening on port 3000'))

const io = socket(server, {
    origin: 'http://localhost:5173/',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    optionsSuccessStatus: true,
})

io.on('connection', (socket) => {
    console.log('connected: ' + socket.id)

    socket.on('join_post', (data) => {
        console.log(`user ${socket.id} has joined ${data}`)
        socket.join(data)
    })

    socket.on('send_post', (data) => {
        socket.broadcast.emit('get_posts', data)
        console.log(data)
    })

    socket.on('send_comment', (data) => {
        socket.broadcast.emit('get_comments', data)
        console.log(data)
    })

    socket.on('disconnect', () => {
        console.log('disconnected: ' + socket.id)
    })
})