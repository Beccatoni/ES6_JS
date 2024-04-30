function Plane(numEngines){
    this.numEngines = numEngines;
    this.enginesActive = false;
}


Plane.prototype.startEngines = function(){
    console.log('Starting engines...')
    this.enginesActive = true;
}

var myPlane = new Plane(1);
// console.log(myPlane);
myPlane.startEngines();