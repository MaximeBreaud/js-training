'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops, do it using recursion
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
function multiply(a, b) {
    var result = (a < 0) ? (b > 0) ? -1 : 1 : (b < 0) ? -1 : 1;

    a = (a < 0) ? -a : a;
    b = (b < 0) ? -b : b;

    function mult(a, b) {
        if (b === 0) {
            return 0
        };
        return a + mult(a, b - 1);
    }

    if (result === 1) {
        return mult(a, b)
    } else {
        return -mult(a, b)
    };
}

console.log(multiply(2, 5));
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
