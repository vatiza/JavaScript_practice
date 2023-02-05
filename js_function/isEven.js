// console.log(7 % 2);
// console.log(83 % 2);
// console.log(145 % 2);
// console.log(128 % 2);

function isEven(number) {
    const reminder = number % 2;
    // console.log(reminder);
    if (reminder === 0) {
        console.log("number is even",number);
    }else console.log("number is odd",number)
}
isEven(32);
isEven(105)