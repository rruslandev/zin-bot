const alertPublisherNameCharsLimitMsg = require('../../../../../../messages/dataCollection/enterPublisherNameState/alertPublisherNameCharsLimitMsg')

function alertPublisherNameCharsLimit(bot, chatId) {
	bot.sendMessage(chatId, alertPublisherNameCharsLimitMsg)
}

module.exports = alertPublisherNameCharsLimit
