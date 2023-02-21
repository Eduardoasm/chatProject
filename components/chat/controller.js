const store = require('./store')

function listChats(userId) {
    return store.list(userId)
}

function addChat(users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('invalid user list');
    }
    
    const chat = {
        users: users
    }

    return store.add(chat)
}

module.exports = {
    listChats,
    addChat
}