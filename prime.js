const prime = (number) => {
  let count = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log("it is a prime number");
  } else {
    console.log("not a prime");
  }
};

prime(97);
