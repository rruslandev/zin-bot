const { greetingMsg } = require('../../messages/mainMenuMsg')
const MAIN_MENU = require('../../menu/main/menuOptions')

const checkUser = require('../../utils/users/checkUser')
const setUser = require('../../utils/users/setUser')

function startCommandRequest(bot) {
	bot.onText(/\/start/, (msg) => {
		const chatId = msg.chat.id
		const user = checkUser(msg, chatId)

		user.state = null
		user.data = {}
		setUser(chatId, user)

		return bot.sendMessage(chatId, greetingMsg, MAIN_MENU)
	})
}

module.exports = startCommandRequest
