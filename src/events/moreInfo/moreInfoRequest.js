const handleMoreInfoMenu = require('./handlers/handleMoreInfoMenu')
const handleQuestionAnswers = require('./handlers/handleQuestionAnswers')
const handleOnMainMenu = require('./handlers/handleOnMainMenu')

function moreInfoRequest(bot) {
	handleMoreInfoMenu(bot)
	handleQuestionAnswers(bot)
	handleOnMainMenu(bot)
}

module.exports = moreInfoRequest
