const setUser = require('../../../../../../utils/users/setUser')
const { UPLOAD_PHOTOS_MENU } = require('../../../../../../menu/dataCollection/menuOptions')
const uploadPhotosMsg = require('../../../../../../messages/dataCollection/enterDescriptionState/uploadPhotosMsg')

function handleUploadPhotosAgain(bot, chatId, user) {
	user.data.photos = []
	setUser(chatId, user)
	bot.sendMessage(chatId, uploadPhotosMsg, UPLOAD_PHOTOS_MENU)
}

module.exports = handleUploadPhotosAgain
