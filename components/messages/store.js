const Model = require('./model')

function addMessage(message) {
    const MyMessage = new Model(message)
    MyMessage.save()
}

function getMessage(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            filter = {user: filterUser}
        }
        const messages = Model.find(filter)
        .populate('user')
        .exec((error, populated) => {
            if(error) {
                reject(error)
                return false
            }
            resolve(populated)
        })
    })
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id,
    })

    foundMessage.message = message

    const newMessage = await foundMessage.save();

    return newMessage;
}

async function deleteMessage(id) {
    const deleteMessages = await Model.deleteOne(id)

    return deleteMessages
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText,
    deleteMessage,
}