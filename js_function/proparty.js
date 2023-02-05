var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard:5, 
    mouse:1,
    pen:25
}
var pencount2=shoppingCart['books']
var pencount = shoppingCart.pen;
console.log(shoppingCart)
console.log(pencount2)
var properties1 = Object.keys(shoppingCart)
var properties=Object.values(shoppingCart)
console.log(properties1)
console.log(properties)