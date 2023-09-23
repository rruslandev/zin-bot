const fs = require('fs')
const path = require('path')

const USERS_PATH = path.join(__dirname, '..', '..', 'users.json')

function getUser(chatId) {
	const users = JSON.parse(fs.readFileSync(USERS_PATH, 'utf-8'))
	return users.find((user) => user.chatId === chatId)
}

module.exports = getUser
