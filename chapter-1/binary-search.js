const binarySearch = (num, array) => {
	let low = 0;
	let high = array.length - 1;

	while (low <= high) {
		const mid = Math.round((low + high) / 2);
		const current = array[mid];

		if (current === num) return mid;

		if (current > num) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return null;
};

console.log(binarySearch(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
