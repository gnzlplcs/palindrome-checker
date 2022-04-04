function palindrome(str) {
  let cleanWord = cleanStr(str);
  let reverseWord = '';
  for (let i = cleanWord.length - 1; i >= 0; i--) {
    reverseWord += cleanWord[i]
  }
  return cleanWord === reverseWord ? true : false;
}

const cleanStr = str => {
  let regexValidator = /[a-z0-9]/ig;
  let cleanStr = str.match(regexValidator)
  let output = cleanStr.join('').toLowerCase();
  return output;
}

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
console.log(palindrome("five|\_/|four")); // false
