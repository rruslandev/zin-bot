const onlyPhotosAlertMsg = require('../../../../../../messages/dataCollection/uploadPhotosState/onlyPhotosAlertMsg')

function handleOnlyPhotosAllowedMessage(bot, chatId) {
	bot.sendMessage(chatId, onlyPhotosAlertMsg)
}

module.exports = handleOnlyPhotosAllowedMessage
