const { enterCityState } = require('../states')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const enterCityMsg = require('../../../../../messages/dataCollection/enterNameState/enterCityMsg')

function handleEnterNameState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (!msgText) {
		validStringInputAlert(bot, chatId)
		return
	}

	user.data.authorName = msgText
	user.state = enterCityState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterCityMsg)
}

module.exports = handleEnterNameState
