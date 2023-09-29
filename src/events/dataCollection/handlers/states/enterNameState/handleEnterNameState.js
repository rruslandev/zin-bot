const { enterCityState } = require('../states')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const enterCityMsg = require('../../../../../messages/dataCollection/enterNameState/enterCityMsg')
const normalizeNewLines = require('../../../../dataCollection/utils/normalizeNewLines')
const { nameCharsLimit } = require('../../../../../config/bot/charsLimit')
const alertNameCharsLimit = require('./stateHandlers/alertNameCharsLimit')

function handleEnterNameState(bot, chatId, user, msg) {
	const msgText = normalizeNewLines(msg.text)

	if (!msgText) {
		validStringInputAlert(bot, chatId)
		return
	}

	if (msgText.length > nameCharsLimit) {
		alertNameCharsLimit(bot, chatId)
		return
	}

	user.data.authorName = msgText
	user.state = enterCityState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterCityMsg)
}

module.exports = handleEnterNameState
