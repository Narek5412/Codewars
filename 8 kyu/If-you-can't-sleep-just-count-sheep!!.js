var countSheep = function (num) {
    //your code here\
    let k = "";
    if (num === 0) {
        return "";
    } else {
        for (let i = 0; i < num; i++) {
            k = k + (i + " sheep...")
        }
        return k
    }
};
console.log(countSheep(7))