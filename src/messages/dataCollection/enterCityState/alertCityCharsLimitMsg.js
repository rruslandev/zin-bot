const { cityCharsLimit } = require('../../../config/bot/charsLimit')

const alertCityCharsLimitMsg = `это точно правильный город? мы рассчитывали что он будет не больше ${cityCharsLimit} знаков`

module.exports = alertCityCharsLimitMsg
