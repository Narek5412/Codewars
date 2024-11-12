/*Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.
*/
function invert(array) {

    for (let i = 0; i < array.length; i++) {
        array[i] *= -1;
    }
    return array;
    // return array.map(i => 0 - i);
}

console.log(invert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
