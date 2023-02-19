const Model = require('./model')

function addMessage(message) {
    const MyMessage = new Model(message)
    MyMessage.save()
}

async function getMessage(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = {user: filterUser}
    }
    const messages = await Model.find(filter)
    return messages
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