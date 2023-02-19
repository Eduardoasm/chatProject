const store = require('./store')

function addMessage(user, message){
    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[messageController] No hay usuario o mensaje')
            return reject('los datos son incorrectos');
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
        
        store.add(fullMessage);
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