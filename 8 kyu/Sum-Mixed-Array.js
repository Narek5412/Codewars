function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += +x[i];
    }
    return sum;
}

console.log(sumMix([9, 3, '7', '3']));