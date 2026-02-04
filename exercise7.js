// abstract object shape
const shape = {
    calculateArea() {
        return 0;
    },
};

// defined rectangle of object shape
// uses w * h to calc area
const rectangle = Object.create(shape);
rectangle.width = 5;
rectangle.height = 4;
rectangle.calculateArea = function () {
    return this.width * this.height;
};

// defined circle of object shape
// uses pi * radius^2 to calc area
const circle = Object.create(shape);
circle.radius = 5;
circle.calculateArea = function () {
    return Math.PI * this.radius ** 2;
};

console.log("P4E8: Rectangle Area: " + rectangle.calculateArea());
//used toFixed(n) to format circle area to 2 decimal places
console.log("P4E8: Circle Area: " + circle.calculateArea().toFixed(2));
