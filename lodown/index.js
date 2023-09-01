'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * map: Function takes in a collection and callback function. It returns a new array of the result of invoking the
 * callback on each item in the collection.
 * 
 * @param { Array or Object } collection: Function takes in an array or an object as a collection.
 * @param { Function }: Function takes in a callback function. 
 * @returns { Array }: Function returns a new array populated by the results of invoking the callback on each item.
 */

function map(collection, func){ // TURN IT INTO A FUNCTION DECLARATION
    // let collection = [1, 2, 3]
    // let func = function(num) { return num * 10 } // num = 2 => 20
    let output = [];

    if (Array.isArray(collection)){ // if array
        for (let i = 0; i < collection.length; i++){ // i = 1
            // collection[i] => current 
            output.push(func(collection[i], i, collection)); // output.push(20) // [10, 20]
        }
    } else { // else it's an object
        // iterate over object
            // call the callback on the current value, key, and collection
    }

    return output;
}

module.exports.map = map; // module.exports.{nameOfFunction} = nameOfFunction