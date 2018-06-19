function sumFibs(num) {
	let a = 1,
		b = 0,
		oddsum = 0;

	for (let i = 0; i < num; i++) {
		i = a;

		if (i % 2 !== 0) {
			if (i > num) {
				console.log(i);
				break;
			} else {
				oddsum += i;
			}
		}
		a = a + b;
		b = i;
	}

	return oddsum;
}
sumFibs(1000);