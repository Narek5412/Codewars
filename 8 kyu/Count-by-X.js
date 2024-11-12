function countBy(x, n) {
    let z = [];
    let k = 0
    for (let i = 0; i < n; i++) {
        k = x + k
        z[i] = k
    }
    return z;
}

console.log(countBy(1, 10));