function ElectricalAppliance(type, model, power) {
    this.type = type,
    this.model = model,
    this.power = power,
    this.isOffOn = false
}

ElectricalAppliance.prototype.on = function() {
    console.log(`The ${this.type} ${this.model} is on`);
    this.isOffOn = true;
};

ElectricalAppliance.prototype.off = function() {
    console.log(`The ${this.type} ${this.model} is off`);
    this.isOffOn = false;
};

ElectricalAppliance.prototype.totalPower = function() {
    if (this.isOffOn) return this.power;
    else return 0;
}

const microwaveOven = new ElectricalAppliance('Microwave oven', 'Samsung', 1000);
const laptop = new ElectricalAppliance('laptop', 'Asus', 200);
const kettle = new ElectricalAppliance('Kettle', 'Tefal', 2000);

microwaveOven.off();
laptop.on();
kettle.on();

console.log(`Total power = ${microwaveOven.totalPower() + laptop.totalPower() + kettle.totalPower()} watt`);