const { backBtn } = require('../../menu/moreInfo/buttons')
const { MAIN_MENU } = require('../../menu/main/menuOptions')
const { handleBackRequestMsg } = require('../../messages/menuRequest')

function handleBackRequest(bot) {
	bot.on('message', (msg) => {
		const chatId = msg.chat.id

		if (msg.text === backBtn) {
			bot.sendMessage(chatId, handleBackRequestMsg, MAIN_MENU)
		}
	})
}

module.exports = handleBackRequest
