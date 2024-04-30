class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return this.PI * this.getDiameter(radius);
    }
}

console.log(MathUtil.getCircumference(3));

// WHILE USING Static keyword you don't need to instantiate the object to acces that method of the class