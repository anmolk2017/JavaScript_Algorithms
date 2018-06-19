function sumPrimes(max) {
	var sieve = [],
		i,
		j,
		primes = [];
	for (i = 2; i <= max; ++i) {
		if (!sieve[i]) {
		
			primes.push(i);
			for (j = i; j <= max; j += i) {
				sieve[j] = true;
			}
		}
	}
	var output = primes.reduce((accum, current) => accum + current);
	return output;
}
sumPrimes(977);