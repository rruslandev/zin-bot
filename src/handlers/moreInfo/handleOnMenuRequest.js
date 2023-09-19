const { onMainBtn } = require('../../menu/moreInfo/buttons')
const { MAIN_MENU } = require('../../menu/main/menuOptions')
const { handleOnMenuRequestMsg } = require('../../messages/menuRequest')

function handleOnMenuRequest(bot) {
	bot.on('message', (msg) => {
		const chatId = msg.chat.id

		if (msg.text === onMainBtn) {
			bot.sendMessage(chatId, handleOnMenuRequestMsg, MAIN_MENU)
		}
	})
}

module.exports = handleOnMenuRequest
