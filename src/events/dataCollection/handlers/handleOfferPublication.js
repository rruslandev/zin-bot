const { startDialogState } = require('./states/states')
const setUser = require('../../../utils/users/setUser')
const { OK_BACK_MENU } = require('../../../menu/dataCollection/menuOptions')
const startDialogMsg = require('../../../messages/dataCollection/startDialogMsg')

function handleOfferPublication(bot, chatId, user) {
	user.state = startDialogState
	setUser(chatId, user)
	bot.sendMessage(chatId, startDialogMsg, OK_BACK_MENU)
}

module.exports = handleOfferPublication
