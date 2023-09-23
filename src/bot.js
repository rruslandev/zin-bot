const TelegramBot = require('node-telegram-bot-api')

const BOT_TOKEN = require('./config/tokens')

const startCommandRequest = require('./events/start/startCommandRequest')
const dataCollectionDialogRequest = require('./events/dataCollection/dataCollectionDialogRequest')
const moreInfoRequest = require('./events/moreInfo/moreInfoRequest')

const bot = new TelegramBot(BOT_TOKEN, { polling: true })

console.log('Bot is running!')

bot.on('polling_error', (error) => {
	console.log(error)
})

startCommandRequest(bot)

dataCollectionDialogRequest(bot)

moreInfoRequest(bot)
