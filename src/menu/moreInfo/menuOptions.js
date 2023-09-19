const {
	whoCanOfferZineBtn,
	howToSellBtn,
	aboutProjectBtn,
	readMoreAboutZineCultureBtn,
	wantToHelpProjectBtn,
	onMainBtn,
} = require('./buttons')

const MORE_INFO_MENU = {
	reply_markup: {
		resize_keyboard: true,
		keyboard: [
			[whoCanOfferZineBtn],
			[howToSellBtn],
			[aboutProjectBtn],
			[readMoreAboutZineCultureBtn],
			[wantToHelpProjectBtn],
			[onMainBtn],
		],
	},
}

module.exports = { MORE_INFO_MENU }
