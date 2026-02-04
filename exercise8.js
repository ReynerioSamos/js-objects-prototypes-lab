// Challenge: Build a simple library system

// library object declaration
const library = {
    name: "City Library",
    books: [],

    //==METHODS==
    // adds a book to books[] array using book attributes
    addBook(title, author, isbn) {
        // creates a temp book object
        const book = {
            title: title,
            author: author,
            isbn: isbn,
        };
        // pushes book to books[] array
        this.books.push(book);
    },

    // returns book object if found by title, else returns null
    findBookByTitle(title) {
        return this.books.find((book) => book.title === title);
    },

    // lists all book titles in books[] array
    listAllBooks() {
        console.log(
            `All books in ${this.name}: ` +
                this.books.map((book) => book.title).join(", "),
        );
    },
};

// universityLibrary object created using Object.create(library) and establishing prototype link
// NOTE: extra parameters used in Object.create() to set the name property of the universityLibrary object after linking
const universityLibrary = Object.create(library, {
    name: { value: "University Library" },
});
// courses[] array property added to universityLibrary object
universityLibrary.courses = [];
// added addCourseBook method to universityLibrary
universityLibrary.addCourseBook = function (courseName, title, author, isbn) {
    // create temp book object with extra course property (I didn't know if this was required but I thought books would
    // be tied to a course in this universityLibrary permutation)
    const book = {
        title: title,
        author: author,
        isbn: isbn,
        course: courseName,
    };
    // pushes book object to books[] array
    this.books.push(book);
    // check to see if courseName is already in courses[] array, if not then pushes it
    if (!this.courses.includes(courseName)) {
        this.courses.push(courseName);
    }
};

// Adding books to library object
library.addBook("Blood Meridian", "Cormac McCarthy", "0679728759");
library.addBook(
    "I Have No Mouth & I Must Scream",
    "Harlan Ellison",
    "9780441363940",
);
library.addBook("All Tomorrows", "C.M Kosemen", "9781789652499");

// Adding Course books to universityLibrary object and a Regular Book to universityLibrary object
universityLibrary.addCourseBook(
    "CMPS2212",
    "JavaScript: The Good Parts",
    "Douglas Crockford",
    "9780596806750",
);
universityLibrary.addCourseBook(
    "CMPS2212",
    "Profesional JavaScript for Web Developers",
    "Matt Frisbie",
    "9781394193219",
);
universityLibrary.addCourseBook(
    "MATH2210",
    "Calculus",
    "James Stewart",
    "9781305272364",
);
universityLibrary.addBook(
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    "9780743273565",
);

// Testing methods for library and universityLibrary objects
console.log("===P4E9 CHALLENGE===");

// Testing findBookByTitle()
console.log(
    "Looking for Blood Meridian in " + universityLibrary.name + ": ",
    JSON.stringify(library.findBookByTitle("Blood Meridian")),
);
console.log(
    "Looking for Calculus in " + universityLibrary.name + ": ",
    JSON.stringify(universityLibrary.findBookByTitle("Calculus")),
);
console.log(
    "Looking for The Great Gatsby in " + universityLibrary.name + ": ",
    JSON.stringify(universityLibrary.findBookByTitle("The Great Gatsby")),
);

//Testing listAllBooks()
console.log(library.listAllBooks());
console.log(universityLibrary.listAllBooks());

//Listing all Courses in universityLibrary object
console.log(
    "Courses in " + universityLibrary.name + ": ",
    universityLibrary.courses.join(", "),
);
// Listing books for a course in universityLibrary object
console.log(
    "Book(s) for Course CMPS2212: ",
    JSON.stringify(
        universityLibrary.books.filter((book) => book.course === "CMPS2212"),
    ),
);

//=== BONUS ===
// Adding method to search for books by author in main library object prototype using arrow function and filter ()
// To get it to work I had to explicitly pass the library books[] array attribute as arrowfunctions have no implicit this binding (can't use this)
const findBookByAuthor = (author) => {
    return library.books.filter((book) => book.author === author);
};

// Testing findBooksByAuthor()
console.log(
    "Books by Douglas Crockford in " + library.name + ": ",
    JSON.stringify(findBookByAuthor("Douglas Crockford")),
);
