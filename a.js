function isPrimeNumber(number) {
    let result = null;
    for (i = 2; i <= number/2; i++) {
        number % i === 0 ? result = false break : result = true
    } return result ;
}console.log(isPrimeNumber(101))
