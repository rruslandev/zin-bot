const { skipBtn } = require('../../../../../menu/dataCollection/buttons')
const { enterSocialNetworkState } = require('../states')
const { SKIP_MENU } = require('../../../../../menu/dataCollection/menuOptions')
const setUser = require('../../../../../utils/users/setUser')
const validStringInputAlert = require('../../../utils/validStringInputAlert')
const enterSocialNetworkMsg = require('../../../../../messages/dataCollection/enterTelegramState/enterSocialNetworkMsg')

function handleEnterTelegramState(bot, chatId, user, msg) {
	const msgText = msg.text

	if (!msgText) {
		validStringInputAlert(bot, chatId)
		return
	}

	if (msgText === skipBtn) {
		user.data.authorTelegram = ''
	} else {
		user.data.authorTelegram = `https://t.me/${msgText}`
	}
	user.state = enterSocialNetworkState
	setUser(chatId, user)
	bot.sendMessage(chatId, enterSocialNetworkMsg, SKIP_MENU)
}

module.exports = handleEnterTelegramState
