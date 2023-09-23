const handleStartDialogState = require('./startDialogState/handleStartDialogState')
const handleEnterNameState = require('./enterNameState/handleEnterNameState')
const handleEnterCityState = require('./enterCityState/handleEnterCityState')
const handleEnterPublisherNameState = require('./enterPublisherNameState/handleEnterPublisherNameState')
const handleEnterYearState = require('./enterYearState/handleEnterYearState')
const handleEnterDescriptionState = require('./enterDescriptionState/handleEnterDescriptionState')
const handleUploadPhotosState = require('./uploadPhotosState/handleUploadPhotosState')
const handleEnterVideoUrlState = require('./enterVideoUrlState/handleEnterVideoUrlState')
const handleIsForSaleState = require('./isForSaleState/handleIsForSaleState')
const handleEnterPriceState = require('./enterPriceState/handleEnterPriceState')
const handleEnterTelegramState = require('./enterTelegramState/handleEnterTelegramState')
const handleEnterSocialNetworkState = require('./enterSocialNetworkState/handleEnterSocialNetworkState')
const handleConfirmationState = require('./confirmationState/handleConfirmationState')

const {
	startDialogState,
	enterNameState,
	enterCityState,
	enterPublisherNameState,
	enterYearState,
	enterDescriptionState,
	uploadPhotosState,
	enterVideoUrlState,
	isForSaleState,
	enterPriceState,
	enterTelegramState,
	enterSocialNetworkState,
	confirmationState,
} = require('./states')

function handleStatesActions(bot, chatId, user, msg) {
	switch (user.state) {
		case startDialogState:
			handleStartDialogState(bot, chatId, user, msg)
			break
		case enterNameState:
			handleEnterNameState(bot, chatId, user, msg)
			break
		case enterCityState:
			handleEnterCityState(bot, chatId, user, msg)
			break
		case enterPublisherNameState:
			handleEnterPublisherNameState(bot, chatId, user, msg)
			break
		case enterYearState:
			handleEnterYearState(bot, chatId, user, msg)
			break
		case enterDescriptionState:
			handleEnterDescriptionState(bot, chatId, user, msg)
			break
		case uploadPhotosState:
			handleUploadPhotosState(bot, chatId, user, msg)
			break
		case enterVideoUrlState:
			handleEnterVideoUrlState(bot, chatId, user, msg)
			break
		case isForSaleState:
			handleIsForSaleState(bot, chatId, user, msg)
			break
		case enterPriceState:
			handleEnterPriceState(bot, chatId, user, msg)
			break
		case enterTelegramState:
			handleEnterTelegramState(bot, chatId, user, msg)
			break
		case enterSocialNetworkState:
			handleEnterSocialNetworkState(bot, chatId, user, msg)
			break
		case confirmationState:
			handleConfirmationState(bot, chatId, user, msg)
			break
	}
}

module.exports = handleStatesActions
