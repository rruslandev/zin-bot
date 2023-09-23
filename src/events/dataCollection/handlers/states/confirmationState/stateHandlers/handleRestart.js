const { startDialogState } = require('../../states')
const { OK_BACK_MENU } = require('../../../../../../menu/dataCollection/menuOptions')

const setUser = require('../../../../../../utils/users/setUser')

const startDialogMsg = require('../../../../../../messages/dataCollection/startDialogMsg')

function handleRestart(bot, chatId, user) {
	user.state = startDialogState
	user.data = {}
	setUser(chatId, user)
	bot.sendMessage(chatId, startDialogMsg, OK_BACK_MENU)
}

module.exports = handleRestart
