const { okBtn, backBtn } = require('../../../../../menu/dataCollection/buttons')
const handleBack = require('./stateHandlers/handleBack')
const handleOk = require('./stateHandlers/handleOk')

function handleStartDialogState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (msgText === backBtn) {
		handleBack(bot, chatId, user)
	}

	if (msgText === okBtn) {
		handleOk(bot, chatId, user)
	}
}

module.exports = handleStartDialogState
