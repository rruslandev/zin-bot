const writeToSheet = require('../../../../../../services/googleSheetsService')

async function handleWriteToSheet(user) {
	const {
		username,
		data: {
			authorName,
			city,
			publisherName,
			year,
			description,
			videoLink,
			isForSale,
			authorTelegram,
			authorSocialNetwork,
			price,
		},
	} = user

	await writeToSheet([
		username,
		authorName,
		city,
		publisherName,
		year,
		description,
		videoLink ? videoLink : 'не указано',
		isForSale ? 'Да' : 'Нет',
		price ? price : 'не продается',
		authorTelegram ? authorTelegram : 'не указано',
		authorSocialNetwork ? authorSocialNetwork : 'не указано',
	])
}

module.exports = handleWriteToSheet
