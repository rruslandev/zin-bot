const getUser = require('../../utils/users/getUser')
const setUser = require('../../utils/users/setUser')

const {
	OK_BACK_MENU,
	SKIP_MENU,
	SELL_QUESTION_MENU,
	CONFIRMATION_MENU,
	ADD_ANOTHER_PUBLICATION_MENU,
	UPLOAD_PHOTOS_MENU,
} = require('../../menu/dataFormCollection/menuOptions')

const { MAIN_MENU } = require('../../menu/main/menuOptions')

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
	enterSocialState,
	confirmationState,
} = require('./states')

const { offerPublicationBtn } = require('../../menu/main/buttons')
const { handleOnMenuRequestMsg } = require('../../messages/menuRequest')

const {
	okBtn,
	backBtn,
	skipBtn,
	yesBtn,
	noOnlyShowBtn,
	yesPublishBtn,
	noRestartBtn,
	addAnotherPublicationBtn,
	moreInfoBtn,
	allPhotosUploadedBtn,
	uploadPhotosAgainBtn,
} = require('../../menu/dataFormCollection/buttons')

function handleMultiStepDialog(bot) {
	bot.on('message', (msg) => {
		const chatId = msg.chat.id
		const user = getUser(chatId)

		if (msg.text === offerPublicationBtn) {
			user.state = startDialogState
			setUser(chatId, user)
			bot.sendMessage(
				chatId,
				'Я задам несколько вопросов (вопросы со звездочкой обязательные)',
				OK_BACK_MENU
			)
		}

		if (user && user.state) {
			switch (user.state) {
				case startDialogState:
					// Обработка кнопки "Назад"
					if (msg.text === backBtn) {
						user.state = null
						user.data = {}
						setUser(chatId, user)
						bot.sendMessage(chatId, handleOnMenuRequestMsg, MAIN_MENU)
					}

					// Обработка кнопки "Ok"
					if (msg.text === okBtn) {
						user.state = enterNameState
						setUser(chatId, user)
						bot.sendMessage(chatId, 'имя фамилия/псевдоним автора (авторов)*', {
							reply_markup: {
								remove_keyboard: true,
							},
						})
					}
					break
				case enterNameState:
					user.data.authorName = msg.text
					user.state = enterCityState
					setUser(chatId, user)
					bot.sendMessage(chatId, 'город*')
					break
				case enterCityState:
					user.data.city = msg.text
					user.state = enterPublisherNameState
					setUser(chatId, user)
					bot.sendMessage(chatId, 'название печатного издания*')
					break
				case enterPublisherNameState:
					user.data.publisherName = msg.text
					user.state = enterYearState
					setUser(chatId, user)
					bot.sendMessage(chatId, 'год*')
					break
				case enterYearState:
					user.data.year = msg.text
					user.state = enterDescriptionState
					setUser(chatId, user)
					bot.sendMessage(chatId, 'короткое описание (очень короткое, до 4х предложений)*')
					break
				case enterDescriptionState:
					user.data.description = msg.text
					user.state = uploadPhotosState
					user.data.photos = []
					setUser(chatId, user)
					bot.sendMessage(
						chatId,
						'загрузите до 10 фотографий. для вертикальных фото лучше использовать формат 4:5* Если загрузили не ту фотографию, то нажмите на кнопку "загрузить заново" и снова отправьте все нужные фото',
						UPLOAD_PHOTOS_MENU
					)
					break
				case uploadPhotosState:
					if (msg.text === allPhotosUploadedBtn) {
						if (user.data.photos && user.data.photos.length > 0 && user.data.photos.length <= 10) {
							user.state = enterVideoUrlState
							setUser(chatId, user)
							bot.sendMessage(chatId, 'cсылка на видео-пролистывание (youtube/vimeo)', SKIP_MENU)
						} else if (user.data.photos.length === 0) {
							bot.sendMessage(chatId, 'Загрузите хотя бы одно фото прежде чем продолжить.')
						} else if (user.data.photos.length > 10) {
							bot.sendMessage(
								chatId,
								`Пожалуйста, загрузите не более 10 фото. Сейчас нажмите на кнопку «загрузить заново»`,
								UPLOAD_PHOTOS_MENU
							)
						}
					} else if (msg.text === uploadPhotosAgainBtn) {
						user.data.photos = []
						setUser(chatId, user)
						bot.sendMessage(
							chatId,
							'загрузите до 10 фотографий. для вертикальных фото лучше использовать формат 4:5* Если загрузили не ту фотографию, то нажмите на кнопку "загрузить заново" и снова отправьте все нужные фото',
							UPLOAD_PHOTOS_MENU
						)
					} else if (!msg.photo) {
						bot.sendMessage(
							chatId,
							'Только фото! Если отправите текст и другие типы файлов, то они учитываться не будут. Я заберу только фотографии :)'
						)
					} else if (msg.photo) {
						const photo = msg.photo[msg.photo.length - 1]
						const fileId = photo.file_id

						// if (!user.data.photos) {
						// 	user.data.photos = []
						// }

						user.data.photos.push(fileId)
						setUser(chatId, user)
					}
					break
				case enterVideoUrlState:
					if (msg.text === skipBtn) {
						user.data.videoLink = ''
					} else {
						user.data.videoLink = msg.text
					}
					user.state = isForSaleState
					setUser(chatId, user)
					bot.sendMessage(chatId, 'это произведение продаётся?*', SELL_QUESTION_MENU)
					break
				case isForSaleState:
					//Отработка кнопки "Да"
					if (msg.text === yesBtn) {
						user.data.isForSale = true
						user.state = enterPriceState
						setUser(chatId, user)
						bot.sendMessage(chatId, 'цена*', {
							reply_markup: {
								remove_keyboard: true,
							},
						})
					}
					// Отработка кнопки "Нет, просто показываю красивое"
					if (msg.text === noOnlyShowBtn) {
						user.data.isForSale = false
						user.state = enterTelegramState
						setUser(chatId, user)
						bot.sendMessage(
							chatId,
							'тг аккаунт для связи с автором. Если на ваше произведение найдется покупатель — он напишет вам напрямую. Укажите только username без @ и t.me/',
							SKIP_MENU
						)
					}
					break
				case enterPriceState:
					user.data.price = msg.text
					user.state = enterTelegramState
					setUser(chatId, user)
					bot.sendMessage(
						chatId,
						'тг аккаунт для связи с автором. Если на ваше произведение найдется покупатель — он напишет вам напрямую. Укажите только username без @ и t.me/',
						SKIP_MENU
					)
					break
				case enterTelegramState:
					if (msg.text === skipBtn) {
						user.data.authorTelegram = ''
					} else {
						user.data.authorTelegram = `https://t.me/${msg.text}`
					}
					user.state = enterSocialState
					setUser(chatId, user)
					bot.sendMessage(chatId, 'соцсеть автора', SKIP_MENU)
					break
				case enterSocialState:
					if (msg.text === skipBtn) {
						user.data.authorSocialNetwork = ''
					} else {
						user.data.authorSocialNetwork = msg.text
					}
					user.state = confirmationState
					setUser(chatId, user)
					bot.sendMessage(chatId, 'Спасибо! всё верно?', CONFIRMATION_MENU)
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
					bot.sendMediaGroup(chatId, mediaGroup)

					break
				case confirmationState:
					// Отработка кнопки "Нет, давай по новой"
					if (msg.text === noRestartBtn || msg.text === addAnotherPublicationBtn) {
						user.state = startDialogState
						user.data = {}
						setUser(chatId, user)
						bot.sendMessage(
							chatId,
							'Я задам несколько вопросов (вопросы со звездочкой обязательные)',
							OK_BACK_MENU
						)
					}
					// Отработка кнопки "Да, всё так! публикуем!"
					if (msg.text === yesPublishBtn) {
						bot.sendMessage(
							chatId,
							'Спасибо! Заявка улетела к моей коллеге-человеку. Когда у неё будет время она обязательно посмотрит. "Дзинь" это независимый проект и мы всегда рады репостам, упоминаниям и донатам. Что-нибудь ещё?',
							ADD_ANOTHER_PUBLICATION_MENU
						)

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

						// Отправляем фотографии с подписью к последней фотографии
						bot.sendMediaGroup(6239925941, mediaGroup)
					}
					break
			}
		}
	})
}

module.exports = handleMultiStepDialog
