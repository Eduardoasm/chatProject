const express = require('express');
const router = express.Router();
const app = express();

app.use(router);

router.get('/', function(req, res) {
    res.send('soy ruta get')
})

app.listen(3000)

console.log('escuchando en el puerto 3000')