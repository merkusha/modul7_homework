class ElectricalAppliance {
    constructor(type, model, power) {
        this.type = type;
        this.model = model;
        this.power = power;
        this.isOffOn = false;
    }

    on() {
        console.log(`The ${this.type} ${this.model} is on`);
        this.isOffOn = true;
    }

    off() {
        console.log(`The ${this.type} ${this.model} is off`);
        this.isOffOn = false;
    }

    totalPower() {
        if (this.isOffOn) return this.power;
        else return 0;
    }
}

const microwaveOven = new ElectricalAppliance('Microwave oven', 'Samsung', 1000);
const laptop = new ElectricalAppliance('Laptop', 'Asus', 200);
const kettle = new ElectricalAppliance('Kettle', 'Teffal', 2000);

microwaveOven.on();
laptop.on();
kettle.off();

console.log(`Total power = ${microwaveOven.totalPower() + laptop.totalPower() + kettle.totalPower()} watt`);
