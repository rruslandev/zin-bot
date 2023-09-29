const { uploadPhotosState } = require('../states')
const setUser = require('../../../../../utils/users/setUser')
const { UPLOAD_PHOTOS_MENU } = require('../../../../../menu/dataCollection/menuOptions')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const uploadPhotosMsg = require('../../../../../messages/dataCollection/enterDescriptionState/uploadPhotosMsg')
const normalizeNewLines = require('../../../../dataCollection/utils/normalizeNewLines')
const alertDescriptionCharsLimit = require('./stateHandlers/alertDescriptionCharsLimit')
const { descriptionCharsLimit } = require('../../../../../config/bot/charsLimit')

function handleEnterDescriptionState(bot, chatId, user, msg) {
	if (!msg.text) {
		validStringInputAlert(bot, chatId)
		return
	}

	const msgText = normalizeNewLines(msg.text)

	if (msgText.length > descriptionCharsLimit) {
		alertDescriptionCharsLimit(bot, chatId)
		return
	}

	user.data.description = msgText
	user.state = uploadPhotosState
	user.data.photos = []
	setUser(chatId, user)
	bot.sendMessage(chatId, uploadPhotosMsg, UPLOAD_PHOTOS_MENU)
}

module.exports = handleEnterDescriptionState
