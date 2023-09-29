const alertYearCharsLimitMsg = require('../../../../../../messages/dataCollection/enterYearState/alertYearCharsLimitMsg')

function alertYearCharsLimit(bot, chatId) {
	bot.sendMessage(chatId, alertYearCharsLimitMsg)
}

module.exports = alertYearCharsLimit
