class Vehicle{
    constructor( color = 'blue', wheels = 4, horn = 'beep beep'){
        this.color = color;
        this.wheels = wheels;
        this.horn = horn;
    }
    honkHorn(){
        console.log(this.horn);
    }
}

// the subclass of vehicle
class Bicycle extends Vehicle {
    constructor(color = 'blue', wheels = 2, horn = 'honk honk'){
        super(color, wheels, horn);
    }
    displayWheels(){
        console.log(this.wheels);
    }
}


const myVehicle  = new Vehicle();
myVehicle.honkHorn();
const myBike = new Bicycle();
myBike.honkHorn();
myBike.displayWheels();