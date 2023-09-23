const setUser = require('../../../../../../utils/users/setUser')
const { enterNameState } = require('../../states')
const enterNameMsg = require('../../../../../../messages/dataCollection/startDialogState/enterNameMsg')

function handleOk(bot, chatId, user) {
	user.state = enterNameState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterNameMsg, {
		reply_markup: {
			remove_keyboard: true,
		},
	})
}

module.exports = handleOk
