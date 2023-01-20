const randomArrayItem = (ARRAY) => {
	const RANDOM_ARRAY_INDEX = Math.floor(Math.random() * ARRAY.length)

	return ARRAY[RANDOM_ARRAY_INDEX]
}

export { randomArrayItem }
