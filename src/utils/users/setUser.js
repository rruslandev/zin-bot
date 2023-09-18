const fs = require('fs')
const path = require('path')

const USERS_PATH = path.join(__dirname, '..', '..', 'users.json')

function setUser(chatId, user) {
	const users = JSON.parse(fs.readFileSync(USERS_PATH, 'utf-8'))
	const userIndex = users.findIndex((u) => u.chatId === chatId)

	if (userIndex !== -1) {
		users[userIndex] = user
		fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 2))
	} else {
		users.push(user)
		fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 2))
	}
}

module.exports = setUser
