/*Finish the solution so that it takes an input n (integer) and returns a string that is
the decimal representation of the number grouped by commas after every 3 digits.
Assume: 0 <= n <= 2147483647
Examples
       1   ->   "1"
      10   ->   "10"
     100   ->   "100"
    1000   ->   "1,000"
   10000   ->   "10,000"
  100000   ->   "100,000"
 1000000   ->   "1,000,000"
35235235   ->   "35,235,235"
 */
function groupByCommas(n) {
    let str = n.toString()
    let newStr = '';
    for (let i = 1; i < str.length + 1; i++) {
        if (i % 3 === 0 && i !== str.length) {
            newStr = "," + str[str.length - i] + newStr
        } else {
            newStr = str[str.length - i] + newStr
        }

    }
    return newStr
}

console.log(groupByCommas(35235235))
console.log(groupByCommas(1000000))
console.log(groupByCommas(100000))