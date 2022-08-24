function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; i < word.length/2; i++){
    if(word[i] !== word[word.length - i -1]){
      return false
    }
  }
  return true
}

/* 
  Add your pseudocode here

  Iterate from 0 to end and end to zero at the same time
    check the two characters if similar
      if not similar quit and return false (not a palindrome)
      also, if we've already checked all the items and none returned false, return true
    
  if after iterating through all words and their counterparts starting from the other end doesn't return false, return true, the value is a palindrome
*/

/*
  Add written explanation of your solution here

  we are checking the first character in the word against the last, the second against second last and so on.
  if by iterating through all of them, all of these values are similar, return true, else return false
  we are also ensuring that we aren't doing repetitive work, that's why we check if the looping reached or is
  past the middle point. That means the other that started from the end is also at or past the middle point,
  and therefore all values have been checked. In this case, if nothing has been returned, we can just return
  true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("redivider"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("reviver"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("bouncer"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("awesome"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("together"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("remember"));
}

module.exports = isPalindrome;
