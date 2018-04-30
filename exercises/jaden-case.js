'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
//String.prototype.toJadenCase = function () {
//    return this.split(' ').map(function (item) {
//        return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
//    }).join(' ');
//};


//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase("You must write your own tests"), "You Must Write Your Own Tests")

// End of tests */
