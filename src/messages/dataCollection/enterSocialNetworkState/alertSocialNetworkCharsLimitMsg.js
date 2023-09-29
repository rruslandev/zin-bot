const { socialNetworkCharsLimit } = require('../../../config/bot/charsLimit')

const alertSocialNetworkCharsLimitMsg = `это точно правильная ссылка на соцсеть? мы рассчитывали что она будет не больше ${socialNetworkCharsLimit} знаков`

module.exports = alertSocialNetworkCharsLimitMsg
