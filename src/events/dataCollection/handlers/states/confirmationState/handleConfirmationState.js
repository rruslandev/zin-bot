const handleRestart = require('./stateHandlers/handleRestart')
const handleHappyState = require('./stateHandlers/handleHappyState')
const handleForwardMediaGroup = require('./stateHandlers/handleForwardMediaGroup')
const handleWriteToSheet = require('./stateHandlers/handleWriteToSheet')

const {
	noRestartBtn,
	addAnotherPublicationBtn,
	yesPublishBtn,
} = require('../../../../../menu/dataCollection/buttons')

async function handleConfirmationState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (msgText === noRestartBtn || msgText === addAnotherPublicationBtn) {
		handleRestart(bot, chatId, user)
	}

	if (msgText === yesPublishBtn) {
		await handleHappyState(bot, chatId, user)

		await handleForwardMediaGroup(bot, user)

		await handleWriteToSheet(user)
	}
}

module.exports = handleConfirmationState
