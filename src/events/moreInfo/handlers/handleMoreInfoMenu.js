const MORE_INFO_MENU = require('../../../menu/moreInfo/menuOptions')
const { moreInfoBtn } = require('../../../menu/main/buttons')
const { handleMoreInfoMenuMsg } = require('../../../messages/mainMenuMsg')

function handleMoreInfoMenu(bot) {
	bot.on('message', (msg) => {
		const chatId = msg.chat.id

		if (msg.text === moreInfoBtn) {
			bot.sendMessage(chatId, handleMoreInfoMenuMsg, MORE_INFO_MENU)
		}
	})
}

module.exports = handleMoreInfoMenu
