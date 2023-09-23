const checkUser = require('../../utils/users/checkUser')

const handleOfferPublication = require('./handlers/handleOfferPublication')
const handleStatesActions = require('./handlers/states/handleStatesActions')
const checkReturnCommands = require('../dataCollection/utils/checkReturnCommands')

const { offerPublicationBtn } = require('../../menu/main/buttons')

function dataCollectionDialogRequest(bot) {
	bot.on('message', (msg) => {
		const msgText = msg.text
		if (checkReturnCommands(msgText)) {
			return
		}

		const chatId = msg.chat.id
		const user = checkUser(msg, chatId)

		if (msg.text === offerPublicationBtn) {
			handleOfferPublication(bot, chatId, user)
		}

		if (user && user.state) {
			handleStatesActions(bot, chatId, user, msg)
		}
	})
}

module.exports = dataCollectionDialogRequest
