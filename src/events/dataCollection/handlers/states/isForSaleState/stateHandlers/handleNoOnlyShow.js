const { enterTelegramState } = require('../../states')
const { SKIP_MENU } = require('../../../../../../menu/dataCollection/menuOptions')
const setUser = require('../../../../../../utils/users/setUser')
const enterTelegramMsg = require('../../../../../../messages/dataCollection/isForSaleState/enterTelegramMsg')

function handleNoOnlyShow(bot, chatId, user) {
	user.data.isForSale = false
	user.state = enterTelegramState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterTelegramMsg, SKIP_MENU)
}

module.exports = handleNoOnlyShow
