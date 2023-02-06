const express = require('express')
const router = express.Router()
const response = require('../../network/response')

router.get('/', function(req, res) {
    console.log(req.headers)
    res.header({
        "custom-headers": "Nuestro valor personalizado",
    })
    // res.send('soy ruta get')
    response.success(req, res, 'Lista de mensajes');
})
 
router.post('/', function(req, res){
    console.log(req.body)
    console.log(req.query)
    if(req.query.error == "ok"){
        response.error(req, res, "error inesperado", 500, 'Es solo una simulacion de los errores')
    }

    response.success(req, res, 'Creado correctamente', 200)
})

module.exports = router