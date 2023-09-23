const { google } = require('googleapis')
const keys = require('../config/credentials.json')
const googleSheetId = require('../config/googleSheetId')
const sheetRange = require('../config/sheetRange')

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
	'https://www.googleapis.com/auth/spreadsheets',
])

client.authorize(function (err, tokens) {
	if (err) {
		console.log(err)
		return
	}
	console.log('Connected to Google Sheets API')
})

const sheets = google.sheets({ version: 'v4', auth: client })

async function writeToSheet(data) {
	const sheetId = googleSheetId // Замените на ваш ID таблицы
	await sheets.spreadsheets.values.append({
		spreadsheetId: sheetId,
		range: sheetRange, // Обновите это имя листа, если оно отличается
		valueInputOption: 'RAW',
		resource: { values: [data] },
	})
}

module.exports = writeToSheet
