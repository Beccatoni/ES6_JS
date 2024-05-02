let stu1 = {name:'James', age:26, gender:'male'};
let stu2 = {name:'Julia', age:27, gender:'female'};
let stu3 = {name:'Richard', age:31, gender:'male'};

const roster = new WeakSet([stu1, stu2, stu3]);

// Convert the WeakSet to an array to inspect its contents
console.log(roster); // This will output the objects contained in the WeakSet

stu3 = null;
console.log(roster.has(stu3));
