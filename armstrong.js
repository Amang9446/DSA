//https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1

const armstrong = (number) => {
  const length = number.toString().split("").length;
  let armstrong = 0;
  let tempNumber = number;
  while (number > 0) {
    let lastNumber = number % 10;
    armstrong = armstrong + Math.pow(lastNumber, length);
    number = parseInt(number / 10);
  }
  if (tempNumber == armstrong) {
    console.log("it is an armstrong Number");
  }
};

armstrong(153);
