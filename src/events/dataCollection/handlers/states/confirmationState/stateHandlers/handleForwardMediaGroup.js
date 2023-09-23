const forwardMsgChatId = require('../../../../../../config/forwardMsgChatId')

async function handleForwardMediaGroup(bot, user) {
	const {
		authorName,
		city,
		publisherName,
		year,
		description,
		photos,
		videoLink,
		isForSale,
		authorTelegram,
		authorSocialNetwork,
		price,
	} = user.data

	const linesForward = [
		`<b>${publisherName}</b>`,
		`${year}`,
		`автор <a href="${authorSocialNetwork}">${authorName}</a>`,
		`${city}`,
		'',
		`<i>${description}</i>`,
	]

	// Флаг для отслеживания того, была ли добавлена хоть одна дополнительная строка
	let anyAdditionalLines = false

	if (videoLink) {
		if (!anyAdditionalLines) {
			linesForward.push('')
			anyAdditionalLines = true
		}
		linesForward.push(`<a href="${videoLink}">Листалка</a>`)
	}

	if (isForSale) {
		if (!anyAdditionalLines) {
			linesForward.push('')
			anyAdditionalLines = true
		}
		linesForward.push(`<b>${price}</b>`)

		if (authorTelegram) {
			linesForward.push(
				`Чтобы купить, пишите автору: <a href="${authorTelegram}">${authorTelegram}</a>`
			)
		}
	}

	// Теперь всегда добавляем пустую строку перед "Предложить свой зин"
	linesForward.push('')

	linesForward.push(`<a href="https://t.me/for_zin_bot">Предложить свой зин</a>`)

	const forwardText = linesForward.join('\n')

	let mediaGroup = photos.map((photoId, index) => ({
		type: 'photo',
		media: photoId,
		caption: index === photos.length - 1 ? forwardText : undefined,
		parse_mode: index === photos.length - 1 ? 'HTML' : undefined,
	}))

	// Отправляем фотографии в личку с подписью к последней фотографии
	await bot.sendMediaGroup(forwardMsgChatId, mediaGroup)
}

module.exports = handleForwardMediaGroup
