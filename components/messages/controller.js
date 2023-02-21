const store = require('./store')
const socket = require('../../socket').socket

function addMessage(chat, user, message, file){
    return new Promise((resolve, reject) => {
        if(!chat || !user || !message){
            console.error('[messageController] No hay usuario o mensaje')
            return reject('los datos son incorrectos');
        }

        let fileUrl = ''



        if(file) {
            fileUrl = 'http://localhost:3000/app/files/' + file.filename.replace(/\s+/g, '')
        }

        console.log('soy file', file)

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
        }
        
        store.add(fullMessage);

        socket.io.emit('message', fullMessage);

        resolve(fullMessage);
    })
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

async function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        console.log(message)
        if (!id || !message) {
            reject('invalid data');
            return false;
        }
        const result = await store.updateText(id, message)

        resolve(result)
    })
}

async function deleteMessage(id) {
    return new Promise(async (resolve, reject) => {
        if(!id) {
            reject('invalid data')
        }
        const message = await store.deleteMessage({id})
        resolve(message)
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}