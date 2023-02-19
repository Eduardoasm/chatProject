const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller');

router.post('/', function(req, res) {
    console.log(req.body)
    controller.addUser(req.body.name)
    .then((data) => {
        response.success(req, res, data, 200)
    }) 
    .catch(e => {
        response.error(req, res, 'Internal Error', 500, e)
    })
})

router.get('/', function(req, res) {
    controller.getUser()
    .then((data) => {
        response.success(req, res, data, 200)
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 501, err)
    })
})

module.exports = router