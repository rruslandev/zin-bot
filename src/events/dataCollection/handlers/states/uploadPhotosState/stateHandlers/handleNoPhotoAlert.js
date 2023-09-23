const noPhotosUploadedMsg = require('../../../../../../messages/dataCollection/uploadPhotosState/noPhotosUploadedMsg')

function handleNoPhotoAlert(bot, chatId) {
	bot.sendMessage(chatId, noPhotosUploadedMsg)
}

module.exports = handleNoPhotoAlert
