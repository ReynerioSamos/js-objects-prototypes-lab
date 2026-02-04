// takes length and width as parameters to calculate Area using the formula length * width
function calculateArea(length, width) {
    return length * width;
}

console.log("P1E1: Area of 5*10 is " + calculateArea(5, 10));
console.log("P1E1: Area of 7*3 is " + calculateArea(7, 3));
console.log("P1E1: Area of 4*4 is " + calculateArea(4, 4));

// takes length and width as parameters to calculate Perimeter using the formula (2*length)+(2*width)
const calculatePerimeter = function (length, width) {
    return 2 * length + 2 * width;
};

console.log("P1E2: Perimeter of 5*10 is " + calculatePerimeter(5, 10));
console.log("P1E2: Perimeter of 7*3 is " + calculatePerimeter(7, 3));
console.log("P1E2: Perimeter of 4*4 is " + calculatePerimeter(4, 4));
