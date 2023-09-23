const {
	ADD_ANOTHER_PUBLICATION_MENU,
} = require('../../../../../../menu/dataCollection/menuOptions')

const happyStateMsg = require('../../../../../../messages/dataCollection/confirmationState/happyStateMsg')

async function handleHappyState(bot, chatId) {
	await bot.sendMessage(chatId, happyStateMsg, ADD_ANOTHER_PUBLICATION_MENU)
}

module.exports = handleHappyState
