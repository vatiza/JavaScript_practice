function maxInArray(numbers) {
    for (let i = 0; i < numbers.length; i++){
        let largest = numbers[0];
        const index = i;
        const elements = numbers[index]
     
        if (elements > largest) {
            largest = elements;
        }
        return largest;

    }

}
const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights)
console.log('tallest person is: ', tallest);