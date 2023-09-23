function createNewUser(msg, chatId) {
	console.log('New user created!')
	return {
		username: msg.from.username || '',
		firstName: msg.from.first_name || '',
		lastName: msg.from.last_name || '',
		chatId,
		state: null,
		data: {},
	}
}

module.exports = createNewUser
