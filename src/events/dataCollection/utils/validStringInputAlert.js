const validStringInputAlertMsg = require('../../../messages/dataCollection/utils/validStringInputAlertMsg')

function validStringInputAlert(bot, chatId) {
	bot.sendMessage(chatId, validStringInputAlertMsg)
}

module.exports = validStringInputAlert
