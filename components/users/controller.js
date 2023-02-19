const store = require('./store')

function addUser(name) {
    if(!name) {
        return Promise.reject('invalid data')
    }

    const user = {
        name,
    }

    return store.add(user)

}

function getUser() {
    return store.users()
}

module.exports = {
    addUser,
    getUser,
}