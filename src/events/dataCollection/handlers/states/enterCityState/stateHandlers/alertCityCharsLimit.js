const alertCityCharsLimitMsg = require('../../../../../../messages/dataCollection/enterCityState/alertCityCharsLimitMsg')

function alertCityCharsLimit(bot, chatId) {
	bot.sendMessage(chatId, alertCityCharsLimitMsg)
}

module.exports = alertCityCharsLimit
