const { enterPriceState } = require('../../states')
const setUser = require('../../../../../../utils/users/setUser')
const enterPriceMsg = require('../../../../../../messages/dataCollection/isForSaleState/enterPriceMsg')

function handleYes(bot, chatId, user) {
	user.data.isForSale = true
	user.state = enterPriceState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterPriceMsg, {
		reply_markup: {
			remove_keyboard: true,
		},
	})
}

module.exports = handleYes
