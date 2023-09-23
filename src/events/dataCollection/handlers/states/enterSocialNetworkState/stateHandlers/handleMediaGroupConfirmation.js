async function handleMediaGroupConfirmation(bot, chatId, user) {
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

	const linesConfirm = [
		`<b>автор:</b> ${authorName}`,
		`<b>город:</b> ${city}`,
		`<b>название:</b> ${publisherName}`,
		`<b>год:</b> ${year}`,
		`<b>описание:</b> ${description}`,
		`<b>видео:</b> ${videoLink ? `<a href='${videoLink}'>${videoLink}</a>` : 'не указано'}`,
		`<b>продаётся?:</b> ${isForSale ? 'Да' : 'Нет, просто показываю красивое'}`,
		`<b>цена:</b> ${isForSale ? `${price}` : 'не продается'}`,
		`<b>тг аккаунт автора:</b> ${
			authorTelegram ? `<a href='${authorTelegram}'>${authorTelegram}</a>` : 'не указано'
		}`,
		`<b>соцсеть автора:</b> ${
			authorSocialNetwork
				? `<a href='${authorSocialNetwork}'>${authorSocialNetwork}</a>`
				: 'не указано'
		}`,
	]

	const confirmationText = linesConfirm.join('\n')

	let mediaGroup = photos.map((photoId, index) => ({
		type: 'photo',
		media: photoId,
		caption: index === photos.length - 1 ? confirmationText : undefined,
		parse_mode: index === photos.length - 1 ? 'HTML' : undefined,
	}))

	// Отправляем фотографии с подписью к последней фотографии
	await bot.sendMediaGroup(chatId, mediaGroup)
}

module.exports = handleMediaGroupConfirmation
