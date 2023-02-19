const express = require('express');
const bodyParser = require('body-parser')
const router = require('./network/routes')
const db = require('./db')

db.connect()

const app = express();
// app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.json())
// app.use(router); 
router(app)

app.use('/app', express.static('public'));

app.listen(3000)

console.log('escuchando en el puerto 3000')