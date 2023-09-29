const { enterPublisherNameState } = require('../states')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const enterPublisherNameMsg = require('../../../../../messages/dataCollection/enterCityState/enterPublisherNameMsg')
const normalizeNewLines = require('../../../../dataCollection/utils/normalizeNewLines')
const { cityCharsLimit } = require('../../../../../config/bot/charsLimit')
const alertCityCharsLimit = require('./stateHandlers/alertCityCharsLimit')

function handleEnterCityState(bot, chatId, user, msg) {
	if (!msg.text) {
		validStringInputAlert(bot, chatId)
		return
	}

	const msgText = normalizeNewLines(msg.text)

	if (msgText.length > cityCharsLimit) {
		alertCityCharsLimit(bot, chatId)
		return
	}

	user.data.city = msgText
	user.state = enterPublisherNameState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterPublisherNameMsg)
}

module.exports = handleEnterCityState
