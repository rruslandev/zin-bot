const alertPriceCharsLimitMsg = require('../../../../../../messages/dataCollection/enterPriceState/alertPriceCharsLimitMsg')

function alertPriceCharsLimit(bot, chatId) {
	bot.sendMessage(chatId, alertPriceCharsLimitMsg)
}

module.exports = alertPriceCharsLimit
