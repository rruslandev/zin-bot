const { nameCharsLimit } = require('../../../config/bot/charsLimit')

const alertNameCharsLimitMsg = `это точно правильное имя? мы рассчитывали что оно будет не больше ${nameCharsLimit} знаков`

module.exports = alertNameCharsLimitMsg
