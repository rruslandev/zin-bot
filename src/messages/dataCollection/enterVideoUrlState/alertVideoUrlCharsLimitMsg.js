const { videoUrlCharsLimit } = require('../../../config/bot/charsLimit')

const alertVideoUrlCharsLimitMsg = `это точно верная ссылка на видео? мы рассчитывали что она будет не больше ${videoUrlCharsLimit} знаков`

module.exports = alertVideoUrlCharsLimitMsg
