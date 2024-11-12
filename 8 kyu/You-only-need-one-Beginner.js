function check(a, x) {
    let flag = false;
    for (let i = 0; i < a.length; i++) {
        let result = (a[i] === x) ? flag = true : false;
    }
    return flag
}

console.log(check([101, 45, 75, 105, 99, 107], 107))