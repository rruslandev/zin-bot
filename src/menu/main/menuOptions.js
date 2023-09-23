const { offerPublicationBtn, moreInfoBtn } = require('./buttons')

const MAIN_MENU = {
	reply_markup: {
		resize_keyboard: true,
		keyboard: [[offerPublicationBtn], [moreInfoBtn]],
	},
}

module.exports = MAIN_MENU
