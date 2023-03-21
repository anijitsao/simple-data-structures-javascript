/* 
   1. The following function will compute the character
   occurrence in an provided Array

   Input: ["a", "b", "b", "e", "f", "z", "s", "z", "e"]
   Output: {"a": 1, "b": 2, "e": 2, "f": 1, "z": 2, "s": 1}
*/
function findOccurrence(inputArray) {
  if (!inputArray) {
    return false;
  }

  const characterOccurrence = {};

  // looping through all elements of the Array to generate
  // occurrence of characters
  for (let index = 0; index < inputArray.length; index++) {
    if (!characterOccurrence[inputArray[index]]) {
      characterOccurrence[inputArray[index]] = 1;
    } else {
      characterOccurrence[inputArray[index]] =
        characterOccurrence[inputArray[index]] + 1;
    }
  }

  return characterOccurrence;
}

/*
  2. The following code find minimum of an array 
*/

function findMinimum(inputArray) {
  let minIndex = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[minIndex] > inputArray[i]) {
      minIndex = i;
    }
  }
  return inputArray[minIndex];
}

/* 
  3. The following function will reverse a given Array 
*/

function reverseArray(inputArray) {
  // if no array is supplied
  if (!inputArray) {
    return false;
  }

  const reversedArray = [];

  // looping through all the elements and copying them in
  // reversedArray in reverse order
  for (let index = 0; index < inputArray.length; index++) {
    reversedArray[inputArray.length - 1 - index] = inputArray[index];
  }

  return reversedArray;
}

export { findOccurrence, findMinimum, reverseArray };
