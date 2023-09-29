const { enterTelegramState } = require('../states')
const { SKIP_MENU } = require('../../../../../menu/dataCollection/menuOptions')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const normalizeNewLines = require('../../../../dataCollection/utils/normalizeNewLines')
const alertPriceCharsLimit = require('./stateHandlers/alertPriceCharsLimit')
const { priceCharsLimit } = require('../../../../../config/bot/charsLimit')

function handleEnterPriceState(bot, chatId, user, msg) {
	const msgText = normalizeNewLines(msg.text)

	if (!msgText) {
		validStringInputAlert(bot, chatId)
		return
	}

	if (msgText.length > priceCharsLimit) {
		alertPriceCharsLimit(bot, chatId)
		return
	}

	user.data.price = msgText
	user.state = enterTelegramState
	setUser(chatId, user)
	bot.sendMessage(
		chatId,
		'тг аккаунт для связи с автором. Если на ваше произведение найдется покупатель — он напишет вам напрямую. Укажите только username без @ и t.me/',
		SKIP_MENU
	)
}

module.exports = handleEnterPriceState
