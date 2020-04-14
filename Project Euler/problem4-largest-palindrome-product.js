/* A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, 
   such as madam, racecar. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
   Find the largest palindrome made from the product of two 3-digit numbers.
*/

/* 1. The first step i wanna do is to make a function to check the given input is palindrome */
/* I will use the loop to check if the number is palindrome, but you can use built-in function 
   Object.split('').replace().join(''):
   function checkPalindrome(number){
        return parseInt(String(number).split('').reverse().join('')) === number;
   }
   But i just want to using loop method :)
*/
function checkPalindrome(number){
  var newStr = "";
  if (Number.isInteger(number)){
      var numberToStr = String(number);
      var lenNumber = numberToStr.length;
      for (var i = lenNumber-1; i >= 0; i--){
          newStr += numberToStr[i];
      }
  } else{
      var lenStr = number.length;
      for (var j = lenStr-1; j >= 0; j--){
          newStr += number[j];
      }
  }
  return String(number) === newStr;
}

/* 2. Step 2 i will make function to find the largest palindrome number from given two n-digit number */
function findLargestPalindromeNumber(nDigit){
    var a = Math.pow(10, nDigit - 1);   // To initialize the start n-digit nunber
    var b = Math.pow(10, nDigit);   // To initialize the end n-digit number
    var largestPalindromeNumber = 0;
    var palindromeNumber;
    // Loop through the a and b number, and determine the palindrome number
    for (var i = a; a < b; i++){
        for (var j = a; a < b; j++){
            palindromeNumber = a * b
            // Check if palindromeNumber = palindrome
            if (palindromeNumber > largestPalindromeNumber){    // To check if the result of palindromeNumber is greater than largestPalindromeNumber
                if (checkPalindrome(palindromeNumber)){   // To check wether the number is palindrome
                    largestPalindromeNumber = palindromeNumber;   // Assign the palindromeNumber onto largestPalindromeNumber
                }
            }
        }
    }
    return largestPalindromeNumber;
}
var test = findlargestPalindromeNumber(3);
console.log(test);
