const { enterDescriptionState } = require('../states')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const enterDescriptionMsg = require('../../../../../messages/dataCollection/enterYearState/enterDescriptionMsg')

function handleEnterYearState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (!msgText) {
		validStringInputAlert(bot, chatId)
		return
	}

	user.data.year = msgText
	user.state = enterDescriptionState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterDescriptionMsg)
}

module.exports = handleEnterYearState
