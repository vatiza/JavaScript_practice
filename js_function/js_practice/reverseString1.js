function reverseString(text) {
    let reversed = ' ';
    for (let i = text.length; i >= 0; i--){
        const elements = text[i];
        reversed = reversed + elements;
        console.log(elements,reversed);
    }
    return reversed;
}
const myString = 'i am a good boy';
const reversed = reverseString(myString);
console.log('reversed output', reversed);