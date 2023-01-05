// the following function computes fibonacci of a given num
// fibonacci series 0 1 1 2 3 5 8

function fibonacci(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  // putting it after the first condition as 0 is a falsy value
  if (!num || num < 0) {
    return false;
  }

  // calling function in recursive manner for smaller inputs
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function printFibonacciChain(memberLength) {
  const fibonacciChain = [];
  for (let index = 0; index < memberLength; index++) {
    fibonacciChain.push(fibonacci(index));
  }
  return fibonacciChain.toString();
}

export { fibonacci, printFibonacciChain };
