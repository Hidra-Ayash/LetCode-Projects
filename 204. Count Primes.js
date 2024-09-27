/**
 * @param {number} n
 * @return {number}
 */
/*
In mathematics, the sieve of Eratosthenes is an ancient algorithm
 for finding all prime numbers up to any given limit.
It does so by iteratively marking as composite (i.e., not prime) 
the multiples of each prime, starting with the first prime number, 
2. The multiples of a given prime are generated as a sequence of
 numbers starting from that prime, with constant difference between 
 them that is equal to that prime.[1] This is the sieve's key distinction 
 from using trial division to sequentially test each candidate number for 
 divisibility by each prime.[2] Once all the multiples of each discovered 
 prime have been marked as composites, 
the remaining unmarked numbers are primes.
*/
var countPrimes = function (n) {
  let isPrime = new Array(n + 1).fill(true);
  for (let pr = 2; pr * pr <= n; pr++) {
    if (isPrime[pr] == true) {
      for (let i = pr * pr; i <= n; i += pr) {
        isPrime[i] = false;
      }
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i] == true) {
      count++;
    }
  }
  return count;
};
console.log(countPrimes(49997));
