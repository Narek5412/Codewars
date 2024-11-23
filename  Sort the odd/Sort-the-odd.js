/**
 Task
 You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the
 even numbers at their original positions.
 Examples
 [7, 1]  =>  [1, 7]
 [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
 [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 */

function sortArray(array) {
    let oddArr = array.filter((x) => x % 2).sort((a, b) => a - b);
    let j = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1 || array[i] % 2 === -1) {
            array[i] = oddArr[j]
            j++
        }
    }
    return array
}

console.log(sortArray([47, -32, 20, -27]))
console.log(sortArray([19, 25, -25, 25, 37, -49, 39, 8, -21]))
console.log(sortArray([5, 8, 6, 3, 4]));