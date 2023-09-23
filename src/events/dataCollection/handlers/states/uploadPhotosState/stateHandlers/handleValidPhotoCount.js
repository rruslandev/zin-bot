const { enterVideoUrlState } = require('../../states')
const { SKIP_MENU } = require('../../../../../../menu/dataCollection/menuOptions')
const setUser = require('../../../../../../utils/users/setUser')
const enterVideoUrlMsg = require('../../../../../../messages/dataCollection/uploadPhotosState/enterVideoUrlMsg')

function handleValidPhotoCount(bot, chatId, user) {
	user.state = enterVideoUrlState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterVideoUrlMsg, SKIP_MENU)
}

module.exports = handleValidPhotoCount
