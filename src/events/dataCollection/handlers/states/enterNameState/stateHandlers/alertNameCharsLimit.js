const alertNameCharsLimitMsg = require('../../../../../../messages/dataCollection/enterNameState/alertNameCharsLimitMsg')

function alertNameCharsLimit(bot, chatId) {
	bot.sendMessage(chatId, alertNameCharsLimitMsg)
}

module.exports = alertNameCharsLimit
