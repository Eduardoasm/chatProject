const Model = require('./model')

function addUser(user) {
    const newUser = new Model(user)
    return newUser.save()
}

async function getUser() {
    const users = await Model.find()

    return users
}

module.exports = {
    add: addUser,
    users: getUser,
}