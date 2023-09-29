const alertTelegramCharsLimitMsg = require('../../../../../../messages/dataCollection/enterTelegramState/alertTelegramCharsLimitMsg')

function alertTelegramCharsLimit(bot, chatId) {
	bot.sendMessage(chatId, alertTelegramCharsLimitMsg)
}

module.exports = alertTelegramCharsLimit
