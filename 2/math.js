/**
 * Sums to values
 * @param {number} x value 1
 * @param {number} y value 2
 * @returns {number} sum of the two numbers
 */
function add(x, y) {
    return +x + +y;
}

/**
 * Subtracts two numbers
 * @param {number} x 
 * @param {number} y 
 * @returns {number} the difference between value 1 and 2
 */
const subtract = (x, y) => {
    return x - y;
}

let myName = 'Chris';

module.exports = {
    add,
    subtract,
    myName
}