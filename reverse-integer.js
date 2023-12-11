const reverse = (number) => {
    let reversedNumber = 0;
    while(number > 0){
        lastDigit = number % 10;
        reversedNumber = reversedNumber * 10 + lastDigit;
        number = parseInt(number/10);
    }
    console.log(reversedNumber);
}

reverse(123);