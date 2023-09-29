const alertDescriptionCharsLimitMsg = require('../../../../../../messages/dataCollection/enterDescriptionState/alertDescriptionCharsLimitMsg')

function alertDescriptionCharsLimit(bot, chatId) {
	bot.sendMessage(chatId, alertDescriptionCharsLimitMsg)
}

module.exports = alertDescriptionCharsLimit
