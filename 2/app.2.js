// object deconstruction
/*
const { add, subtract } = require('./math');

console.log(add(2, 3));

console.log(subtract(5, 4));
*/

const mathModule = require('./math');

const sum = mathModule.add(6, 7);
console.log(sum);

const diff = mathModule.subtract(9, 3);
console.log(diff);

console.log(mathModule.myName);

mathModule.myName = 'Christopher';

console.log(mathModule.myName);