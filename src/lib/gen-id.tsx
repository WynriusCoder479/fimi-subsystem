export const genId = () => {
	const randomNumbers: string[] = []
	for (let i = 0; i < 6; i++) {
		randomNumbers.push(Math.floor(Math.random() * 10).toString())
	}
	return randomNumbers.join('')
}
