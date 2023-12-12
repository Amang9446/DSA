const gcd = (num1, num2) => {
    var length = Math.min(num1, num2);
    let gcd;
    for (let i = 0; i <= length; i++) {
      if (num1 % i == 0 && num2 % i == 0) {
        gcd = i;
      }
    }
    console.log(gcd);
  };
  
  gcd(21, 21);