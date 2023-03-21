// the following function computes factorial of a given num

function factorial(num) {
  // 0! = 1 and 1! = 1
  if (num <= 1) {
    return 1;
  }

  // putting it after the first condition as 0 is a falsy value
  if (!num || num < 0) {
    return false;
  }

  // calling function in recursive manner for smaller inputs
  return num * factorial(num - 1);
}

export { factorial };
