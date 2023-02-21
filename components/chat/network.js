const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller');

router.get('/:userId', function(req, res) {
    controller.listChats(req.params.userId)
    .then((users) => {
        response.success(req, res, users, 201)
    })
    .catch(error => {
        response.error(req, res, 'internal Error', 500, error)
    })
})

router.post('/', function(req, res) {
    controller.addChat(req.body.users)
    .then((data) => {
        response.success(req, res, data, 201)
    })
    .catch(err => {
        response.error(res, res, 'Internal Error', 500, err)
    })
})

module.exports = router