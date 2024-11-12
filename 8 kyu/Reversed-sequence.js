const reverseSeq = n => {
    let arr = [];
    for (let k = 0; n > 0; k++ , n--) {
        arr[k] = n;
    }
    return arr
};
console.log(reverseSeq(5))