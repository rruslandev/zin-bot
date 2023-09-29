const alertSocialNetworkCharsLimitMsg = require('../../../../../../messages/dataCollection/enterSocialNetworkState/alertSocialNetworkCharsLimitMsg')

function alertSocialNetworkCharsLimit(bot, chatId) {
	bot.sendMessage(chatId, alertSocialNetworkCharsLimitMsg)
}

module.exports = alertSocialNetworkCharsLimit
