function createNewUser(msg, chatId) {
	console.log('New user created!')
	return {
		username: msg.from.username || '',
		firstName: msg.from.first_name || '',
		lastName: msg.from.last_name || '',
		chatId,
		// добавьте другие поля по мере необходимости
	}
}

module.exports = createNewUser
