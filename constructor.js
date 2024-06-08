function Coffee(roast, ounces) {
this.roast = roast;
this.ounces = ounces;

this.getSize = function(){
    if (this.ounces === 8){
        return "Small"
    }else if (this.ounces === 12){
        return "Medium"
    }else{
        return "Large"
    }
}

this.toString = function(){
return "You've ordered a " + this.getSize() + " " + this.roast + " coffee"
}

}



var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark Roast", 16) ;
console.log(darkRoast.toString());