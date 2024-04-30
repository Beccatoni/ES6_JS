// Destructuring an object

const circle = {
    radius :10,
    color: 'orange',
    getArea: function(){
        return Math.PI * this.radius * this.radius;
    },
    getCircumference: function(){
        return 2 * Math.PI * this.radius;
    }
};

let {radius, getArea, getCircumference} = circle;

console.log(getArea()); // output : NaN
// to solve the problem you can use:    getArea = getArea.bind(circle)

