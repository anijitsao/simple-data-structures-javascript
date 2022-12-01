// the following function will reverse a given Array

function reverseAnArray(arrayToRevese) {
  // if no array is supplied
  if (!arrayToRevese) {
    return false;
  }

  const reversedArray = [];

  // looping through all the elements and copying them in
  // reversedArray in reverse order
  for (let index = 0; index < arrayToRevese.length; index++) {
    reversedArray[arrayToRevese.length - 1 - index] = arrayToRevese[index];
  }

  return reversedArray;
}

// console.log("reverse array", reverseAnArray([12, 34, 45]));

export { reverseAnArray };
