// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/description/

const reverse = (number) => {
    let palindrome = number;
    let reversedNumber = 0;
    while (number > 0) {
      lastDigit = number % 10;
      reversedNumber = reversedNumber * 10 + lastDigit;
      number = parseInt(number / 10);
    }
    if (reversedNumber == palindrome) {
      return true;
    } else {
        return false;
    }
  };
  
  reverse(111);