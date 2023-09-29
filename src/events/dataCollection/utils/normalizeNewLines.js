// Убирает лишние переносы строк в тексте сообщения
function normalizeNewLines(msgText) {
	return msgText.replace(/\n+/g, '\n')
}

module.exports = normalizeNewLines
