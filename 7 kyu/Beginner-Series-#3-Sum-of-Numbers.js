function getSum(a, b) {
    let sum = 0
    if (a === b) {
        sum === a
    }
    if (a > b) {
        for (; b <= a; b++) {
            sum += b
        }
    } else {
        for (; a <= b; a++) {
            sum += a
        }
    }
    return sum
}

console.log(getSum(0, 1));