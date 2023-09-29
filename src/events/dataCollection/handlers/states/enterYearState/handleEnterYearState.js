const { enterDescriptionState } = require('../states')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const enterDescriptionMsg = require('../../../../../messages/dataCollection/enterYearState/enterDescriptionMsg')
const normalizeNewLines = require('../../../../dataCollection/utils/normalizeNewLines')
const alertYearCharsLimit = require('./stateHandlers/alertYearCharsLimit')
const { yearCharsLimit } = require('../../../../../config/bot/charsLimit')

function handleEnterYearState(bot, chatId, user, msg) {
	const msgText = normalizeNewLines(msg.text)

	if (!msgText) {
		validStringInputAlert(bot, chatId)
		return
	}

	if (msgText.length > yearCharsLimit) {
		alertYearCharsLimit(bot, chatId)
		return
	}

	user.data.year = msgText
	user.state = enterDescriptionState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterDescriptionMsg)
}

module.exports = handleEnterYearState
