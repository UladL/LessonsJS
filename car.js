function Factory(make,model,year,color,passengers,convertible,mileage){
this.make = make;
this.model = model;
this.year = year;
this.color = color;
this.passengers = passengers;
this.convertible = convertible;
this.mileage = mileage;
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

var chevy = new Factory("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var cadi = new Factory("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Factory("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
var fiat = new Factory("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
var testCar = new Factory("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

var cars = [chevy, cadi, taxi, fiat, testCar];
for(var i = 0; i < cars.length; i++) {
cars[i].start();
cars[i].drive();
cars[i].drive();
cars[i].stop();
}