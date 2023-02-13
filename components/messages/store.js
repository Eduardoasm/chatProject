const db = require('mongoose');
const Model = require('./model')
require('dotenv').config()

db.promise = global.Promise;
db.connect(process.env.DATABASE, {
    useNewUrlParser: true
})

console.log('[db], Conectada con exito')

function addMessage(message) {
    const MyMessage = new Model(message)
    MyMessage.save()
}

async function getMessage() {
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessage,
    // 
}