const { enterTelegramState } = require('../states')
const { SKIP_MENU } = require('../../../../../menu/dataCollection/menuOptions')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const normalizeNewLines = require('../../../../dataCollection/utils/normalizeNewLines')
const alertPriceCharsLimit = require('./stateHandlers/alertPriceCharsLimit')
const { priceCharsLimit } = require('../../../../../config/bot/charsLimit')
const enterTelegramMsg = require('../../../../../messages/dataCollection/isForSaleState/enterTelegramMsg')

function handleEnterPriceState(bot, chatId, user, msg) {
	if (!msg.text) {
		validStringInputAlert(bot, chatId)
		return
	}

	const msgText = normalizeNewLines(msg.text)

	if (msgText.length > priceCharsLimit) {
		alertPriceCharsLimit(bot, chatId)
		return
	}

	user.data.price = msgText
	user.state = enterTelegramState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterTelegramMsg, SKIP_MENU)
}

module.exports = handleEnterPriceState
