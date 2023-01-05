// the following function checks if a given String is pallindrome or not
// Input: madam
// Output: true

function isPallindrome(str) {
  if (!str) {
    return false;
  }
  
  if (str.length === 0 || str.length === 1) {
    return true;
  }

  // if the first and last charater is same
  // calling function in recursive manner for rest of the String
  if (str[0] === str[str.length - 1]) {
    return isPallindrome(str.slice(1, str.length - 1));
  }

  return false;
}

console.log(isPallindrome("madam"));

export { isPallindrome };
