export const blobToFile = useCallback((theBlob, fileName) => {
	//A Blob() is almost a File() - it's just missing the two properties below which we will add
	const file = new File([theBlob], fileName, { type: theBlob.type })

	return file
}, [])
