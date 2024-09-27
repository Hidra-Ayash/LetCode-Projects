/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  let countNotPrime = 0;
  let countPrime = 0;
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      countPrime++;
    } else {
      countNotPrime++;
    }
  }
  console.log(countNotPrime, countPrime);
  return (
    (factorialNumber(countPrime) * factorialNumber(countNotPrime)) % (1e9 + 7)
  );
};
console.log(numPrimeArrangements(5));
function factorialNumber(num) {
  if (num == 1 || num == 0) {
    return 1;
  } else {
    return (num * factorialNumber(num - 1)) % (10 ** 9 + 7);
  }
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * 2 <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
