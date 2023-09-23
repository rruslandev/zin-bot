const { skipBtn } = require('../../../../../menu/dataCollection/buttons')
const { isForSaleState } = require('../states')
const { SELL_QUESTION_MENU } = require('../../../../../menu/dataCollection/menuOptions')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const isForSaleMsg = require('../../../../../messages/dataCollection/enterVideoUrlState/isForSaleMsg')

function handleEnterVideoUrlState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (!msgText) {
		validStringInputAlert(bot, chatId)
		return
	}

	if (msgText === skipBtn) {
		user.data.videoLink = ''
	} else {
		user.data.videoLink = msgText
	}
	user.state = isForSaleState
	setUser(chatId, user)
	bot.sendMessage(chatId, isForSaleMsg, SELL_QUESTION_MENU)
}

module.exports = handleEnterVideoUrlState
