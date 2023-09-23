function updateUser(msg, user) {
	return {
		...user,
		username: msg.from.username || user.username,
		firstName: msg.from.first_name || user.firstName,
		lastName: msg.from.last_name || user.lastName,
	}
}

module.exports = updateUser
