/* function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    }

    Robot.prototype.maker = "ObjectRUs"


    Robot.prototype.speak = function speak(){
        console.log("SPEAKING")
    }


    Robot.prototype.makeCoffee = function makeCoffee(){
        console.log("COFFEE!")
    }


    Robot.prototype.blinkLights = function blinkLights(){
        console.log("blink lights")
    }

    var robby = new Robot("Robby", 1956, "Dr. Morbiues")
    var rosie = new Robot("Rosie", 1962, "George Jetson")


    robby.onOffSwitch = function(){
        console.log("FLICK LIGHTS")
    }
    robby.makeCoffee = function(){
        console.log("GOING TO STARBUCKS")
    }

    rosie.cleanHouse = function(){
        console.log("CLEANING HOUSE")
    }

    console.log (robby.name + " was made by " + robby.maker +
    " in "+ robby.year + " and is owned by " + robby.owner);
robby.makeCoffee(); 
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker +
" in "+ rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse(); */
/*
function Game(){
    this.level = 0;
}
Game.prototype.play = function(){
    // PLayer stuff
    this.level++;
    console.log("Welcome to level " + this.level)
    this.unlock();
}
Game.prototype.unlock = function(){

if(this.level === 42){
    Robot.prototype.deployLazer = function(){
        console.log(this.name  + " is blasting you with lazer beams")
    }
  }
}

function Robot(name, year, owner){
    this.name = name;
    this.year = year;
    this.owner = owner;
}

var game = new Game()
var robby = new Robot("Robby", 1956, "Dr. Morbius")
var rosie = new  Robot("Rosie", 1962, "Geroge Jetson")

while(game.level < 42){
    game.play()
}
robby.deployLazer();
rosie.deployLazer();
*/

// first we check if fido has sitting at all. If yes then already sitting. if not we go and get it from prototypr and then change it from true toi false
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.sitting = false;
Dog.prototype.species = "Canine";
Dog.prototype.bark = function() {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
}
Dog.prototype.run = function() {
    console.log("Run!");
};
Dog.prototype.wag = function() {
    console.log("Wag!");
};
Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + " is already sitting");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
};


function ShowDog(name, breed, weight, handler) {
  Dog.call(this, name , breed, weight) // a method that can be used with any function. Dog.call is calling Dog function giving it name breed and weight but not handler beause dog doesnt have it
    this.handler = handler;
}


ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function(){
console.log("Stack");
};
ShowDog.prototype.bait = function () {
console.log("Bait");
};
ShowDog.prototype.gait = function (kind) {
console.log (kind + "ing");
};
ShowDog.prototype. groom = function () {
console.log ("Groom");
}


var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");

fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();
/*
function SpaceRobot(name, year, owner, homePlanet) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}
SpaceRobot.prototype = new Robot();
SpaceRobot.prototype.speak = function() {
alert(this.name + " says Sir, If I may venture an opinion...");
};
SpaceRobot.prototype.pilot = function() {
alert(this.name + " says Thrusters? Are they important?");
};
var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker);
var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLights();
simon.speak();*/
