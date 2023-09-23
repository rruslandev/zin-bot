const { enterPublisherNameState } = require('../states')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const enterPublisherNameMsg = require('../../../../../messages/dataCollection/enterCityState/enterPublisherNameMsg')

function handleEnterCityState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (!msgText) {
		validStringInputAlert(bot, chatId)
		return
	}

	user.data.city = msgText
	user.state = enterPublisherNameState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterPublisherNameMsg)
}

module.exports = handleEnterCityState
