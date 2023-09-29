const { priceCharsLimit } = require('../../../config/bot/charsLimit')

const alertPriceCharsLimitMsg = `это точно верная цена? мы рассчитывали что она будет не больше ${priceCharsLimit} знаков`

module.exports = alertPriceCharsLimitMsg
