const handleValidPhotoCount = require('./handleValidPhotoCount')
const handleNoPhotoAlert = require('./handleNoPhotoAlert')
const handlePhotoLimitExceeded = require('./handlePhotoLimitExceeded')

function handleAllPhotosUploaded(bot, chatId, user) {
	if (user.data.photos && user.data.photos.length > 0 && user.data.photos.length <= 10) {
		handleValidPhotoCount(bot, chatId, user)
	}

	if (user.data.photos.length === 0) {
		handleNoPhotoAlert(bot, chatId)
	}

	if (user.data.photos.length > 10) {
		handlePhotoLimitExceeded(bot, chatId)
	}
}

module.exports = handleAllPhotosUploaded
