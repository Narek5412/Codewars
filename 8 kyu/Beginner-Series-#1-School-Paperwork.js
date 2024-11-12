function paperwork(n, m) {
    let result = (n < 0 || m < 0) ? 0 : n * m;
    return result;
}

console.log(paperwork(5, -5));