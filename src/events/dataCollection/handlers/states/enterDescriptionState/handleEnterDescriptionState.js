const { uploadPhotosState } = require('../states')
const setUser = require('../../../../../utils/users/setUser')
const { UPLOAD_PHOTOS_MENU } = require('../../../../../menu/dataCollection/menuOptions')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const uploadPhotosMsg = require('../../../../../messages/dataCollection/enterDescriptionState/uploadPhotosMsg')

function handleEnterDescriptionState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (!msgText) {
		validStringInputAlert(bot, chatId)
		return
	}

	user.data.description = msgText
	user.state = uploadPhotosState
	user.data.photos = []
	setUser(chatId, user)
	bot.sendMessage(chatId, uploadPhotosMsg, UPLOAD_PHOTOS_MENU)
}

module.exports = handleEnterDescriptionState
