const handleYes = require('./stateHandlers/handleYes')
const handleNoOnlyShow = require('./stateHandlers/handleNoOnlyShow')

const { yesBtn, noOnlyShowBtn } = require('../../../../../menu/dataCollection/buttons')

function handleIsForSaleState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (msgText === yesBtn) {
		handleYes(bot, chatId, user)
	}

	if (msgText === noOnlyShowBtn) {
		handleNoOnlyShow(bot, chatId, user)
	}
}

module.exports = handleIsForSaleState
