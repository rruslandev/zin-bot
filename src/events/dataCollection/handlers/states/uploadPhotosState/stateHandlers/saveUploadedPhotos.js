const setUser = require('../../../../../../utils/users/setUser')

function saveUploadedPhotos(chatId, user, msgPhoto) {
	const photo = msgPhoto[msgPhoto.length - 1]
	const fileId = photo.file_id

	user.data.photos.push(fileId)
	setUser(chatId, user)
}

module.exports = saveUploadedPhotos
