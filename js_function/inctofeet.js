// const inc = 84;
// const feet = inc / 12;
// console.log(feet)

// const dadaInc = 144;
// const dadafeet = dadaInc / 12;
// console.log('Ddada Feet', dadafeet)
function incToFeet(inches) {
    const feet = inches / 12;
    return feet;

}
const dadaInc = 144;
const dadafeet = incToFeet(dadaInc);
console.log(dadafeet);

const nanaInc = 200;
const nanaFeet = incToFeet(nanaInc);
console.log(nanaFeet.toFixed(2))