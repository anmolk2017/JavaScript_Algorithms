function smallestCommons(arr) {
	let newarr = [];
	let arr1 = [];
	let arr2 = [];
	arr.sort((a, b) => b - a);
	let max = Math.max(arr[0], arr[1]);
	let min = Math.min(arr[0], arr[1]);

	let sum = arr[0] + arr[1];
	let count = sum;
	for (let i = max - 1; i >= min; i--) {
		newarr.push(i);
	}
	arr.splice(1, 1);
	newarr = arr.concat(newarr);
	console.log(newarr);

	let k = 0;
	let sum2 = 0;
	let loop = 1;
	let bol = false;

	while (k < newarr.length) {
		sum2 = newarr[0] * newarr[1] * loop;

		for (k = 2; k < newarr.length; k++) {
			if (sum2 % newarr[k] !== 0) {
				break;
			}
		}

		loop++;
		//loop++;
	}
	return sum2;
}

smallestCommons([23, 18]);