// the following functions will compute duo digit numbers
// from a provided Array of numbers
// It will also find the Maximum of them

// Input: [12, 1133, 945, 99]
// Output: [12, 1133] and Max: 1133

function checkIfDuoDigit(num) {
  if (!num) {
    return false;
  }

  const numStr = num.toString();

  // a Set contains the digits of the number provided
  const setOfDigits = new Set();
  for (let index = 0; index < numStr.length; index++) {
    setOfDigits.add(numStr[index]);
  }

  return setOfDigits.size === 2;
}

function findMaximumDuoDigit(arrayOfNumbers) {
  if (!arrayOfNumbers) {
    return false;
  }
  const duoDigitNums = arrayOfNumbers.filter((ele) => {
    return checkIfDuoDigit(ele) === true;
  });

  return Math.max(...duoDigitNums);
}

export { checkIfDuoDigit, findMaximumDuoDigit };
