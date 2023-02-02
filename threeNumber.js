var n1 = 13;
var n2 = 79;
var n3 = 456;
if (n1 >= n2 && n1 >= n3)
    console.log("Largest number: ");

// check if n2 is the largest number
else if (n2 >= n1 && n2 >= n3)
    console.log("Largest number: ", n2);

// if neither n1 nor n2 are the largest, n3 is the largest
else
    console.log("Largest number: ",n3);