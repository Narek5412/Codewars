/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit.
    For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
 */
function persistence(num) {
    let str = num + ""
    for (var i = 0; num > 9; i++) {
        num = 1
        for (let j = 0; j < str.length; j++) {
            num *= +str[j]
        }
        str = num + ""
    }
    return i
}

console.log(persistence(999))
console.log(persistence(39))
