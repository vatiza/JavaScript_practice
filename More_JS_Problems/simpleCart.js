const shoppingCard = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 1390 },
    { name: 'pant', price: 1500 },
    { name: 'belt', price: 700 },
];
function totalCost(product) {
    var sum = 0;
    for (let i = 0; i < product.length; i++){
        var product = product[i];
        sum = sum + product.price;
        console.log(product);
    }
    return sum;
}
const expense = totalCost(shoppingCard);
console.log('Total expense today', expense);
