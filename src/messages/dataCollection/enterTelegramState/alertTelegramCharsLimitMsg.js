const { telegramCharsLimit } = require('../../../config/bot/charsLimit')

const alertTelegramCharsLimitMsg = `это точно верный тг аккаунт? мы рассчитывали что он будет не больше ${telegramCharsLimit} знаков`

module.exports = alertTelegramCharsLimitMsg
