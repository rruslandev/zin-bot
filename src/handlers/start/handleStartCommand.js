const { greetingMsg } = require('../../messages/greeting')
const { MAIN_MENU } = require('../../menu/main/menuOptions')
const getUser = require('../../utils/users/getUser')
const setUser = require('../../utils/users/setUser')
const createNewUser = require('../../utils/users/createNewUser')

function handleStartCommand(bot) {
	bot.onText(/\/start/, (msg) => {
		const chatId = msg.chat.id
		const user = getUser(chatId)

		if (!user) {
			const newUser = createNewUser(msg, chatId)
			setUser(chatId, newUser)
		} else {
			const updatedUser = {
				...user,
				username: msg.from.username || user.username,
				firstName: msg.from.first_name || user.firstName,
				lastName: msg.from.last_name || user.lastName,
				// Обновите другие поля по мере необходимости
			}
			setUser(chatId, updatedUser)
		}

		bot.sendMessage(chatId, greetingMsg, MAIN_MENU)
	})
}

module.exports = handleStartCommand
