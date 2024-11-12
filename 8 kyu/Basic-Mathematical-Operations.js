function basicOp(operation, value1, value2) {
    let result = 0;
    let num = (operation === '+') ? result = value1 + value2 :
        (operation === '*') ? result = value1 * value2 :
            (operation === '/') ? result = value1 / value2 : result = value1 - value2;
    return result;
}

console.log(basicOp("-", 15, 18))
