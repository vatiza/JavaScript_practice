
// JavaScript program for the above approach 
 
// Function to check if the triangle
// is equilateral or isosceles or scalene
function checkTriangle(x, y, z)
{
     
    // Check for equilateral triangle
    if (x == y && y == z)
        document.write("Equilateral Triangle");
 
    // Check for isosceles triangle
    else if (x == y || y == z || z == x)
        document.write("Isosceles Triangle");
 
    // Otherwise scalene triangle
    else
        document.write("Scalene Triangle");
}