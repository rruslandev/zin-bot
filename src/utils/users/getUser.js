const fs = require('fs')
const path = require('path')

// TODO: вынести эту константу + глянуть какие еще варианты с файловой системой есть. Подумать что будет если вынести users.json на путь выше
const USERS_PATH = path.join(__dirname, '..', '..', 'users.json')

function getUser(chatId) {
	const users = JSON.parse(fs.readFileSync(USERS_PATH, 'utf-8'))
	return users.find((user) => user.chatId === chatId)
}

module.exports = getUser
