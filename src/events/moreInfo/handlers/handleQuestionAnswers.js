const {
	whoCanOfferZineBtn,
	howToSellBtn,
	aboutProjectBtn,
	readMoreAboutZineCultureBtn,
	wantToHelpProjectBtn,
} = require('../../../menu/moreInfo/buttons')

const whoCanOfferZineAnswer = require('../../../messages/moreInfo/whoCanOfferZineAnswer')
const howToSellAnswer = require('../../../messages/moreInfo/howToSellAnswer')
const aboutProjectAnswer = require('../../../messages/moreInfo/aboutProjectAnswer')
const readMoreAboutZineCultureAnswer = require('../../../messages/moreInfo/readMoreAboutZineCultureAnswer')
const wantToHelpProjectAnswer = require('../../../messages/moreInfo/wantToHelpProjectAnswer')

function handleQuestionAnswers(bot) {
	bot.on('message', (msg) => {
		const chatId = msg.chat.id

		switch (msg.text) {
			case whoCanOfferZineBtn:
				bot.sendMessage(chatId, whoCanOfferZineAnswer)
				break
			case howToSellBtn:
				bot.sendMessage(chatId, howToSellAnswer)
				break
			case aboutProjectBtn:
				bot.sendMessage(chatId, aboutProjectAnswer)
				break
			case readMoreAboutZineCultureBtn:
				bot.sendMessage(chatId, readMoreAboutZineCultureAnswer)
				break
			case wantToHelpProjectBtn:
				bot.sendMessage(chatId, wantToHelpProjectAnswer)
				break
		}
	})
}

module.exports = handleQuestionAnswers
