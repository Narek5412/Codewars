const setDashBetweenTwoEvenNumbers = (num) => {
    let str = "";
    for (; num > 0; num = (num - (num % 10)) / 10) {
        let result = ((num % 10) % 2 === 0 && str[0] % 2 === 0) ?
            str = (num % 10 + "-") + str : str = (num % 10) + str;
    }
    return str;
}
console.log(setDashBetweenTwoEvenNumbers(2614411))
