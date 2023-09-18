const { MORE_INFO_MENU } = require('../../menu/moreInfo/menuOptions')
const { moreInfoBtn } = require('../../menu/main/buttons')
const { handleMoreInfoRequestMsg } = require('../../messages/menuRequest')

function handleMoreInfoRequest(bot) {
	bot.on('message', (msg) => {
		const chatId = msg.chat.id

		if (msg.text === moreInfoBtn) {
			bot.sendMessage(chatId, handleMoreInfoRequestMsg, MORE_INFO_MENU)
		}
	})
}

module.exports = handleMoreInfoRequest
