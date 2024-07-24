function Robot(name, year, owner) {
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
rosie.cleanHouse();
