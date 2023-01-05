// the following function will compute the character
// occurrence in an provided Array

// Input: ["a", "b", "b", "e", "f", "z", "s", "z", "e"]
// Output: {"a": 1, "b": 2, "e": 2, "f": 1, "z": 2, "s": 1}

function findCharacters(arrayToFindOccurrence) {
  if (!arrayToFindOccurrence) {
    return false;
  }

  const characterOccurrence = {};

  // looping through all elements of the Array to generate
  // occurrence of characters
  for (let index = 0; index < arrayToFindOccurrence.length; index++) {
    if (!characterOccurrence[arrayToFindOccurrence[index]]) {
      characterOccurrence[arrayToFindOccurrence[index]] = 1;
    } else {
      characterOccurrence[arrayToFindOccurrence[index]] =
        characterOccurrence[arrayToFindOccurrence[index]] + 1;
    }
  }

  return characterOccurrence;
}

export { findCharacters };
