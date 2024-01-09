class Vehicle {
    constructor(passenger, maxSpeed, driver, amountWheels) {
        this.passenger = passenger;
        this.maxSpeed = maxSpeed;
        this.driver = driver;
        this.amountWheels = amountWheels;
    }

    announceSpeed() {
        console.log(this.maxSpeed);
    }
}

class Boat extends Vehicle {
    constructor(passenger, maxSpeed, driver, amountWheels, depth) {
        super(passenger, maxSpeed, driver, amountWheels);
        this.depth = depth;
    }
}

class Car extends Vehicle {
    constructor(passenger, maxSpeed, driver, amountWheels, fuelType) {
        super(passenger, maxSpeed, driver, amountWheels);
        this.fuelType = fuelType;
    }
}
    
let car = new Car('John', 120, 'Alex', 4, 'diesel');
car.announceSpeed();

