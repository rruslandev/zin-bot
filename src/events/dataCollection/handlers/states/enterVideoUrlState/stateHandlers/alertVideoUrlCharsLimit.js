const alertVideoUrlCharsLimitMsg = require('../../../../../../messages/dataCollection/enterVideoUrlState/alertVideoUrlCharsLimitMsg')

function alertVideoUrlCharsLimit(bot, chatId) {
	bot.sendMessage(chatId, alertVideoUrlCharsLimitMsg)
}

module.exports = alertVideoUrlCharsLimit
