const handleRestart = require('./stateHandlers/handleRestart')
const handleHappyState = require('./stateHandlers/handleHappyState')
const handleForwardMediaGroup = require('./stateHandlers/handleForwardMediaGroup')
const handleWriteToSheet = require('./stateHandlers/handleWriteToSheet')
const { finishedState } = require('../states')
const setUser = require('../../../../../utils/users/setUser')

const { noRestartBtn, yesPublishBtn } = require('../../../../../menu/dataCollection/buttons')

async function handleConfirmationState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (msgText === noRestartBtn) {
		handleRestart(bot, chatId, user)
	}

	if (msgText === yesPublishBtn) {
		await handleHappyState(bot, chatId, user)

		await handleForwardMediaGroup(bot, user)

		await handleWriteToSheet(user)

		user.state = finishedState
		user.data = {}
		setUser(chatId, user)
	}
}

module.exports = handleConfirmationState
