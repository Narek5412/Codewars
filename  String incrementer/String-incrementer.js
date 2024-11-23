/**Your job is to write a function which increments a string, to create a new string.
 If the string already ends with a number, the number should be incremented by 1.
 If the string does not end with a number. the number 1 should be appended to the new string.
 Examples:
 foo -> foo1
 foobar23 -> foobar24
 foo0042 -> foo0043
 foo9 -> foo10
 foo099 -> foo100
 Attention: If the number has leading zeros the amount of digits should be considered.
 */
function incrementString(str) {
    let numPart = '';
    let nonNumPart = '';
    let i = str.length - 1;
    while (i >= 0 && !isNaN(str[i]) && str[i] !== ' ') {
        numPart = str[i] + numPart;
        i--;
    }
    if (numPart) {
        nonNumPart = str.slice(0, i + 1);
        let numLength = numPart.length;
        let incrementedNum = (parseInt(numPart) + 1).toString().padStart(numLength, '0');
        return nonNumPart + incrementedNum;
    } else {
        return str + '1';
    }
}

console.log(incrementString("foo999"))