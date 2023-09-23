const handleAllPhotosUploaded = require('./stateHandlers/handleAllPhotosUploaded')
const handleUploadPhotosAgain = require('./stateHandlers/handleUploadPhotosAgain')
const handleOnlyPhotosAllowedMessage = require('./stateHandlers/handleOnlyPhotosAllowedMessage')
const saveUploadedPhotos = require('./stateHandlers/saveUploadedPhotos')

const {
	allPhotosUploadedBtn,
	uploadPhotosAgainBtn,
} = require('../../../../../menu/dataCollection/buttons')

function handleUploadPhotosState(bot, chatId, user, msg) {
	const msgText = msg.text
	const msgPhoto = msg.photo

	if (msgText === allPhotosUploadedBtn) {
		handleAllPhotosUploaded(bot, chatId, user)
	} else if (msgText === uploadPhotosAgainBtn) {
		handleUploadPhotosAgain(bot, chatId, user)
	} else if (!msgPhoto) {
		handleOnlyPhotosAllowedMessage(bot, chatId)
	} else if (msgPhoto) {
		saveUploadedPhotos(chatId, user, msgPhoto)
	}
}

module.exports = handleUploadPhotosState
