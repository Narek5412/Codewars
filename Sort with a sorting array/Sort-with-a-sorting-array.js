/*Sort an array according to the indices in another array.
It is guaranteed that the two arrays have the same size,
and that the sorting array has all the required indices.

sort(['x', 'y', 'z'], [1, 2, 0]) => ['y', 'z', 'x']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
 */
debugger

function sort(initialArray, sortingArray) {
    let newArr = []
    for (let i = 0; i < sortingArray.length; i++) {
        let index = sortingArray[i]
        newArr[i] = initialArray[index]
    }
    return newArr
}

console.log(sort([1, 2, 3, 4, 5], [2, 1, 0, 3, 4]));
