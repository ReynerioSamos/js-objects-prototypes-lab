//person object which is highest programmer defined prototype
const person = {
    species: "Human",
    breathe() {
        return "Breathing...";
    },
};

//employee object which inherits from person object
const employee = Object.create(person);
employee.company = "Tech Corp";
employee.position = "Developer";

//manager object which inherits from employee object
const manager = Object.create(employee);
manager.department = "Engineering";
manager.team = [];
// method to add team member to manager's team
manager.addTeamMember = function (name) {
    this.team.push(name);
};

//printing prototype chain by accessing properties from all levels
console.log(
    "P4E7 PROTOTYPE CHAIN: chain is manager -> employee -> person -> Object.prototype -> null ",
);
console.log(
    "P4E7 PROTOTYPE CHAIN: accessing manager.department (own property): " +
        manager.department,
);
console.log(
    "P4E7 PROTOTYPE CHAIN: accessing manager.company (inherited from employee): " +
        manager.company,
);
console.log(
    "P4E7 PROTOTYPE CHAIN: accessing manager.species (inherited from person): " +
        manager.species,
);
// decided to go with hasOwnProperty() from previous example as its in Object.prototype
console.log(
    "P4E7 PROTOTYPE CHAIN: accessing manager.hasOwnProperty (inherited from Object.prototype and testing team attribute): " +
        manager.hasOwnProperty("team"),
);
