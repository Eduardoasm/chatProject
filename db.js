const db = require('mongoose');
require('dotenv').config()

async function connect(){
    try {
        // db.promise = global.Promise;
        db.connect(process.env.DATABASE, {
            useNewUrlParser: true
        })
        
    } catch (error) {
        console.log('soy error', error)
    }
}

connect()

console.log('[db], Conectada con exito')

module.exports = { connect }