const { onMainBtn } = require('../../../menu/moreInfo/buttons')
const MAIN_MENU = require('../../../menu/main/menuOptions')
const { handleOnMainMenuMsg } = require('../../../messages/mainMenuMsg')

function handleOnMainMenu(bot) {
	bot.on('message', (msg) => {
		const chatId = msg.chat.id

		if (msg.text === onMainBtn) {
			bot.sendMessage(chatId, handleOnMainMenuMsg, MAIN_MENU)
		}
	})
}

module.exports = handleOnMainMenu
