const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller');
const multer = require('multer')
const path = require('path')
// const nanoid = require('nanoid')

const storage = multer.diskStorage({
    destination : "public/files/",
    filename : function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({
    storage
})


router.get('/', function(req, res) {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
    .then((messageList) => {
        response.success(req, res, messageList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpected error', 500, e)
    })
})
 
router.post('/', upload.single('file'), function(req, res){
    // console.log(req)
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
        response.success(req, res, fullMessage , 201)
    })
    .catch(e => {
        response.error(req, res, 'Inrofmarion invalida', 400, 'Error en el controlador')
    })

})
router.patch('/:id', function(req,res) {
    controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
        response.success(req, res, data, 200)
    })
    .catch(e =>{
        response.error(req, res, 'Error interno', 500, e)
    })
    
})

router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id)
    .then((data) => {
        response.success(req, res, `Mensaje ${req.params.id} ha sido eliminado`, 200)
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500)
    })
})

module.exports = router