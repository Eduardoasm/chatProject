const Model = require('./model')

async function listChat(userId) {
    return new Promise((resolve, reject) => {
        filter = {};
        if(userId) {
            filter = {
                users: userId
            }
        }

        Model.find(filter)
        .populate('users')
        .exec((err, populated) => {
            if(err){
                reject(err);
                return false;
            }
            resolve(populated)
        })
    })
}

function addChat(chat) {
    const myChat = new Model(chat)
    return myChat.save()
}

module.exports = {
    list: listChat,
    add: addChat
}