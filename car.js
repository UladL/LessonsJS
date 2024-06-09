function Car(parameter){
this.make = parameter.make;
this.model = parameter.model;
this.year = parameter.year;
this.color = parameter.color;
this.passengers = parameter.passengers;
this.convertible = parameter.convertible;
this.mileage = parameter.mileage;
this.started = false;


this.start = function(){
    this.started = true;
}

this.stop = function(){
    this.started = false;
}
this.drive = function(){
if (this.started){
    alert(this.make + " " + this.model + " goes zoom zoom!")
}else{
    alert("Start the engine first.")
}
}
}

function Dog(name, breed, weight){
this.name = name;
this.breed = breed;
this.weight = weight;
this.bark = function () {
if (this. weight > 25) {
alert(this.name + " says Woof!");
} else {
alert(this.name + " says Yip!");
}
}}

var limoParams = {
    make: "Webville Motors",
    model: "limo",
    year: 1983,
    color: "black",
    passengers: 12,
    convertible: false,
    mileage: 21120
}

var limo = new Car(limoParams) ;
var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);

console.log(limo.make + " " + limo.model + " is a " + typeof limo); console.log (limoDog.name + " is a " + typeof limoDog) ;

if(limo instanceof Car){
    console.log("Its a car!!")
}
/*
var chevyParams = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
}
var chevy = new Factory(chevyParams)

var cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
}
var cadi = new Factory(cadiParams)


var cars = [chevy, cadi];
for(var i = 0; i < cars.length; i++) {
cars[i].start();
cars[i].drive();
cars[i].drive();
cars[i].stop();
}*/