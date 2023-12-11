// leetcode question 
// https://leetcode.com/problems/reverse-integer/


var reverse = (x) => {
  let splittedNumber = x.toString().split("");
  let setNeg = false;
  if (splittedNumber[0] == "-") {
    setNeg = true;
    splittedNumber.shift();
  }
  let reversedArray = [];
  for (let i = splittedNumber.length - 1; i >= 0; i--) {
    reversedArray.push(splittedNumber[i]);
  }
  reversedNumber = Number(reversedArray.join(""));
  if (reversedNumber > 0x7fffffff) {
    return 0;
  }
  return Number(setNeg ? -reversedNumber : reversedNumber);
};