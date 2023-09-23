const { skipBtn } = require('../../../../../menu/dataCollection/buttons')
const { confirmationState } = require('../states')
const { CONFIRMATION_MENU } = require('../../../../../menu/dataCollection/menuOptions')
const setUser = require('../../../../../utils/users/setUser')
const handleMediaGroupConfirmation = require('./stateHandlers/handleMediaGroupConfirmation')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const confirmMsg = require('../../../../../messages/dataCollection/confirmationState/confirmMsg')

async function handleEnterSocialNetworkState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (!msgText) {
		validStringInputAlert(bot, chatId)
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
