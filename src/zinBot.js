const TelegramBot = require('node-telegram-bot-api')

const { BOT_TOKEN } = require('./config/tokens')

const handleStartCommand = require('./handlers/start/handleStartCommand')
const handleMoreInfoRequest = require('./handlers/moreInfo/handleMoreInfoRequest')
const handleQuestionAnswers = require('./handlers/moreInfo/handleQuestionAnswers')
const handleOnMenuRequest = require('./handlers/moreInfo/handleOnMenuRequest')
const handleMultiStepDialog = require('./handlers/dataFormCollection/handleMultiStepDialog')

const bot = new TelegramBot(BOT_TOKEN, { polling: true })

console.log('Bot is running!')

bot.on('polling_error', (error) => {
	console.log(error)
})

handleStartCommand(bot)

handleMultiStepDialog(bot)

handleMoreInfoRequest(bot)
handleQuestionAnswers(bot)
handleOnMenuRequest(bot)
