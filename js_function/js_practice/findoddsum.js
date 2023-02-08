function getSum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
        const index = i;
               const elements = numbers[index]
        sum = sum + elements;
        console.log(index, elements, sum)
        
    }
    

}


const myNumbers=[12,45,123,47,86,45,13,456]

getSum(myNumbers)