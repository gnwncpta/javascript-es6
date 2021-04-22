function Car(name, color, speed, fuel){
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.fuel = fuel;
}

Car.prototype.race = function(speed){
    console.log(`Mobil ${this.name} berkecepatan ${speed}`);
}

Car.prototype.fillFuel = function(amount){
    console.log(`Mobil ${this.name} di isi bensin sebanyak ${amount}`);
    this.fuel += amount;
}

const i8 = new Car('BMW i8', 'Silver', '300 KM/h', 100);
const Aventador = new Car('Lamborghini Aventador', 'Orange', '350 Km/h', 20);

const Number = 1023;

