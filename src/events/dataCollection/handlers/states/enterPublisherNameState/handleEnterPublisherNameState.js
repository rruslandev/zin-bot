const { enterYearState } = require('../states')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const enterYearMsg = require('../../../../../messages/dataCollection/enterPublisherNameState/enterYearMsg')

function handleEnterPublisherNameState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (!msgText) {
		validStringInputAlert(bot, chatId)
		return
	}

	user.data.publisherName = msgText
	user.state = enterYearState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterYearMsg)
}

module.exports = handleEnterPublisherNameState
