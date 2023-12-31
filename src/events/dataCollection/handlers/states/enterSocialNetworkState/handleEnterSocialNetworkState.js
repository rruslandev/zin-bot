const { skipBtn } = require('../../../../../menu/dataCollection/buttons')
const { confirmationState } = require('../states')
const { CONFIRMATION_MENU } = require('../../../../../menu/dataCollection/menuOptions')
const setUser = require('../../../../../utils/users/setUser')
const handleMediaGroupConfirmation = require('./stateHandlers/handleMediaGroupConfirmation')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const confirmMsg = require('../../../../../messages/dataCollection/confirmationState/confirmMsg')
const normalizeNewLines = require('../../../../dataCollection/utils/normalizeNewLines')
const alertSocialNetworkCharsLimit = require('./stateHandlers/alertSocialNetworkCharsLimit')
const { socialNetworkCharsLimit } = require('../../../../../config/bot/charsLimit')

async function handleEnterSocialNetworkState(bot, chatId, user, msg) {
	if (!msg.text) {
		validStringInputAlert(bot, chatId)
		return
	}

	const msgText = normalizeNewLines(msg.text)

	if (msgText.length > socialNetworkCharsLimit) {
		alertSocialNetworkCharsLimit(bot, chatId)
		return
	}

	if (msgText === skipBtn) {
		user.data.authorSocialNetwork = ''
	} else {
		user.data.authorSocialNetwork = msgText
	}

	user.state = confirmationState
	setUser(chatId, user)
	await bot.sendMessage(chatId, confirmMsg, CONFIRMATION_MENU)

	await handleMediaGroupConfirmation(bot, chatId, user)
}

module.exports = handleEnterSocialNetworkState
