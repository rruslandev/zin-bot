const { skipBtn } = require('../../../../../menu/dataCollection/buttons')
const { enterSocialNetworkState } = require('../states')
const { SKIP_MENU } = require('../../../../../menu/dataCollection/menuOptions')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const enterSocialNetworkMsg = require('../../../../../messages/dataCollection/enterTelegramState/enterSocialNetworkMsg')
const normalizeNewLines = require('../../../../dataCollection/utils/normalizeNewLines')
const alertTelegramCharsLimit = require('./stateHandlers/alertTelegramCharsLimit')
const { telegramCharsLimit } = require('../../../../../config/bot/charsLimit')

function handleEnterTelegramState(bot, chatId, user, msg) {
	if (!msg.text) {
		validStringInputAlert(bot, chatId)
		return
	}

	const msgText = normalizeNewLines(msg.text)

	if (msgText.length > telegramCharsLimit) {
		alertTelegramCharsLimit(bot, chatId)
		return
	}

	if (msgText === skipBtn) {
		user.data.authorTelegram = ''
	} else {
		user.data.authorTelegram = `@${msgText}`
	}
	user.state = enterSocialNetworkState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterSocialNetworkMsg, SKIP_MENU)
}

module.exports = handleEnterTelegramState
