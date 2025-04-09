const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const socket = require('socket.io')
require('dotenv').config()

const app = express()

app.use(cors({
    origin: 'localhost:5173.com',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    optionsSuccessStatus: true,
}))

app.use(express.json({limit: '50mb', extended: true}))
app.use(session({secret: 'cats', resave: false, saveUninitialized: true}))
app.use(cookieParser())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

const server = app.listen(3000, () => console.log('app is listening on port 3000'))