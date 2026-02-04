const student = {
    firstName: "John",
    lastName: "Doe",
    studentID: "12345",
    // empty course array
    courses: [],

    //==METHODS==
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // pushes a course onto the student object courses array
    enrollCourse(coursename) {
        this.courses.push(coursename);
    },

    getCourseCount() {
        return this.courses.length;
    },
};

console.log("P3E4: Student Full Name: " + student.getFullName());
//pushing Courses: CMPS2212 and MATH2210 to student object
student.enrollCourse("CMPS2212");
student.enrollCourse("MATH2210");
//checking course count for student object
console.log("P3E4: Student Course Count: " + student.getCourseCount());

// extra test to check course list for student object
console.log("P3E4 EXTRA: Student Course List: " + student.courses.join(", "));
