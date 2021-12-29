function findFactorialRecursive(number) {
  if (number === 2) return 2;
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  if (number === 2) return 2;
  let answer = 1;
  for (let i = number; i > 0; i--) {
    answer *= i;
  }
  return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(10));
console.log(findFactorialRecursive(10));
console.log(findFactorialIterative(2));
console.log(findFactorialRecursive(2));
