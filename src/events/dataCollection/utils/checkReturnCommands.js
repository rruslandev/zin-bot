const commands = ['/start']

function checkReturnCommands(msgText) {
	return commands.includes(msgText)
}

module.exports = checkReturnCommands
