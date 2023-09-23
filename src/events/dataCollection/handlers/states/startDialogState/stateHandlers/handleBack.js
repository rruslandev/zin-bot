const setUser = require('../../../../../../utils/users/setUser')
const { handleOnMainMenuMsg } = require('../../../../../../messages/mainMenuMsg')

const MAIN_MENU = require('../../../../../../menu/main/menuOptions')

function handleBack(bot, chatId, user) {
	user.state = null
	user.data = {}
	setUser(chatId, user)
	bot.sendMessage(chatId, handleOnMainMenuMsg, MAIN_MENU)
}

module.exports = handleBack
