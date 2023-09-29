const { publisherNameCharsLimit } = require('../../../config/bot/charsLimit')

const alertPublisherNameCharsLimitMsg = `это точно правильное название печатного издания? мы рассчитывали что оно будет не больше ${publisherNameCharsLimit} знаков`

module.exports = alertPublisherNameCharsLimitMsg
