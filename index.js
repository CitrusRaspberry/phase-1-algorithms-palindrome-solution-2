function compareLetters(word) {
  let isEqual = true;

  // Only compares using half of word length for optimization
  let halfOfWordLength = Math.floor(word.length/2);

  // Compares last letter (z) with first letter (a) and then moves inward
  for (let a = 0; a < halfOfWordLength; a++) {
    let z = word.length - 1 - a;

    // If isEqual ever evaluates to false, it can never be true again
    isEqual = word[a] === word[z] && isEqual;
  }
  return isEqual;
}

function isPalindrome(word) {
  return compareLetters(word);
}

/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("hannah"));
}

module.exports = isPalindrome;
