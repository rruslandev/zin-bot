const { UPLOAD_PHOTOS_MENU } = require('../../../../../../menu/dataCollection/menuOptions')
const uploadedPhotosLimitExceeded = require('../../../../../../messages/dataCollection/uploadPhotosState/uploadedPhotosLimitExceeded')

function handlePhotoLimitExceeded(bot, chatId) {
	bot.sendMessage(chatId, uploadedPhotosLimitExceeded, UPLOAD_PHOTOS_MENU)
}

module.exports = handlePhotoLimitExceeded
