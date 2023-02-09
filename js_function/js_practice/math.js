const result = Math.pow(3, 8);
console.log(result);
const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap)
if (gap < 5) {
    console.log('you gusy can be friends');
}
else {
    console.log('you guyes stay apart');
}
// ====================================================
const number = 2.45554;
const fullnum = Math.round(number);
console.log(fullnum)
const result2 = Math.ceil(2.000000001);
const result3 = Math.floor(455.259);
console.log(result3);

// =================================Random
for (let i = 0; i < 5; i++) {
    console.log(Math.random());
}
console.log('random');
const random = (Math.random() * 10);
console.log(random);