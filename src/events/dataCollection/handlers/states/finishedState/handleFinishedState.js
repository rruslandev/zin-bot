const handleRestart = require('../confirmationState/stateHandlers/handleRestart')
const { addAnotherPublicationBtn } = require('../../../../../menu/dataCollection/buttons')

function handleFinishedState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (msgText === addAnotherPublicationBtn) {
		handleRestart(bot, chatId, user)
	}
}

module.exports = handleFinishedState
