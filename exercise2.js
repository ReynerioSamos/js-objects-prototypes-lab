// array of numbers 1-5
const numbers = [1, 2, 3, 4, 5];

// takes array numbers and returns array of squared numbers
const squared = numbers.map((num) => {
    return num * num;
});

// takes array numbers and returns array of even numbers
const evens = numbers.filter((num) => {
    return num % 2 === 0;
});

// takes array numbers and returns sum of all numbers
const sum = numbers.reduce((total, num) => {
    return total + num;
});

// used .join() inherited method from array prototype to print elements more neatly

console.log("P2E3: Squared Array: [" + squared.join(", ") + "]");
console.log("P2E3: Even Array: [" + evens.join(", ") + "]");
console.log("P2E3: Sum of Array: " + sum);
