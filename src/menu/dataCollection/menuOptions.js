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
} = require('./buttons')

const OK_BACK_MENU = {
	reply_markup: {
		resize_keyboard: true,
		keyboard: [[okBtn], [backBtn]],
	},
}

const SKIP_MENU = {
	reply_markup: {
		resize_keyboard: true,
		keyboard: [[skipBtn]],
	},
}

const UPLOAD_PHOTOS_MENU = {
	reply_markup: {
		resize_keyboard: true,
		keyboard: [[allPhotosUploadedBtn], [uploadPhotosAgainBtn]],
	},
}

const SELL_QUESTION_MENU = {
	reply_markup: {
		resize_keyboard: true,
		keyboard: [[yesBtn], [noOnlyShowBtn]],
	},
}

const CONFIRMATION_MENU = {
	reply_markup: {
		resize_keyboard: true,
		keyboard: [[yesPublishBtn], [noRestartBtn]],
	},
}

const ADD_ANOTHER_PUBLICATION_MENU = {
	reply_markup: {
		resize_keyboard: true,
		keyboard: [[addAnotherPublicationBtn], [moreInfoBtn]],
	},
}

module.exports = {
	OK_BACK_MENU,
	SKIP_MENU,
	SELL_QUESTION_MENU,
	CONFIRMATION_MENU,
	ADD_ANOTHER_PUBLICATION_MENU,
	UPLOAD_PHOTOS_MENU,
}
