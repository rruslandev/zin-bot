const getUser = require('./getUser')
const createNewUser = require('./createNewUser')
const updateUser = require('./updateUser')
const setUser = require('./setUser')

function checkUser(msg, chatId) {
	let user = getUser(chatId)

	if (!user) {
		user = createNewUser(msg, chatId)
	} else {
		user = updateUser(msg, user)
	}
	setUser(chatId, user)

	return user
}

module.exports = checkUser
