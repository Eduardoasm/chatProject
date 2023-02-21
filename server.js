const express = require('express');
const app = express();

const server = require('http').Server(app)
const cors = require('cors')
const bodyParser = require('body-parser')
const socket = require('./socket')
const router = require('./network/routes')
const db = require('./db')

db.connect()

app.use(cors());

socket.connect(server);
// app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.json())
// app.use(router); 
router(app)

app.use('/app', express.static('public'));

server.listen(3000)

console.log('escuchando en el puerto 3000')