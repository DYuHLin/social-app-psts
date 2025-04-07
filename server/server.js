const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const socket = require('socket.io')
require('dotenv').config()

const app = express()