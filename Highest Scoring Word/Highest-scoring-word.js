/**Given a string of words, you need to find the highest scoring word.
 Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
 For example, the score of abad is 8 (1 + 2 + 1 + 4).
 You need to return the highest scoring word as a string.
 If two words score the same, return the word that appears earliest in the original string.
 All letters will be lowercase and all inputs will be valid.
 */
function high(x) {
    let arr = x.split(" ")
    let result = ''
    let sum = 0
    let changeSum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            changeSum = changeSum + arr[i][j].charCodeAt(0) - 96
        }
        if (changeSum > sum) {
            sum = changeSum
            result = arr[i]
        }
        changeSum = 0
    }
    return result
}

console.log(high('man i need a taxi up to ubud'))