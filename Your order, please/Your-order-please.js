/*Your task is to sort a given string.
Each word in the string will contain a single number.
This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string.
The words in the input String will only contain valid consecutive numbers.
    Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
 */
function order(words) {
    let arr = words.split(' ');
    let newArr = [];
    newArr.length = arr.length;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++)
            if (+arr[i][j] > 0) {
                newArr[arr[i][j] - 1] = arr[i]
            }
    }
    return newArr.join(" ")
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));