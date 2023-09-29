console.log(1)
async function test() {
	await setTimeout(() => {
		console.log('2')
	}, 1000)
}
test()

console.log(3)
