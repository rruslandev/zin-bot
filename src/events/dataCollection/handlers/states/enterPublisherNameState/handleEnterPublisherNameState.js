const { enterYearState } = require('../states')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const enterYearMsg = require('../../../../../messages/dataCollection/enterPublisherNameState/enterYearMsg')
const normalizeNewLines = require('../../../../dataCollection/utils/normalizeNewLines')
const { publisherNameCharsLimit } = require('../../../../../config/bot/charsLimit')
const alertPublisherNameCharsLimit = require('./stateHandlers/alertPublisherNameCharsLimit')

function handleEnterPublisherNameState(bot, chatId, user, msg) {
	if (!msg.text) {
		validStringInputAlert(bot, chatId)
		return
	}

	const msgText = normalizeNewLines(msg.text)

	if (msgText.length > publisherNameCharsLimit) {
		alertPublisherNameCharsLimit(bot, chatId)
		return
	}

	user.data.publisherName = msgText
	user.state = enterYearState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterYearMsg)
}

module.exports = handleEnterPublisherNameState
