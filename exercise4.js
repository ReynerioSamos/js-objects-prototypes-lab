const book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    isbn: "978-0596517748",
};

// function to display an object value using its key
function displayProperty(obj, propertyName) {
    return obj[propertyName];
}

// function to update an object value using its key
function updateProperty(obj, propertyName, newValue) {
    obj[propertyName] = newValue;
}

console.log(
    "P3E5: Display Book Title Value: " + displayProperty(book, "title"),
);
// extra test just to make sure the updateProperty function works
console.log(
    "P3E5 EXTRA: Display Book Year Value: " + displayProperty(book, "year"),
);
console.log("P3E5: Update Book Year Value to 2024");
updateProperty(book, "year", 2024);
console.log(
    "P3E5: Display Updated Year Value: " + displayProperty(book, "year"),
);
