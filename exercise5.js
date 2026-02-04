const vehicle = {
    wheels: 4,
    describe() {
        return `This vehicle has ${this.wheels} wheels.`;
    },
};

const car = Object.create(vehicle);
car.make = "Toyota";
car.model = "Camry";
car.year = "2024";

console.log(
    "P4E6: Check if car object has its own property 'make': " +
        Object.hasOwn(car, "make"),
);
console.log(
    "P4E6: Check if car object has its own property 'wheels': " +
        Object.hasOwn(car, "wheels"),
);
console.log("P4E6: Display number of wheels value of car object:" + car.wheels);
console.log("P4E6: " + car.describe());
