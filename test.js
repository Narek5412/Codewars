function isPrime(number) {
    let result = null;
    for (i = 2; i < number - 1; i++) {
        if (number % i === 0) {
            result = false;
            break
        } else {
            result = true;
        }
    }
        if (number <= 3) return true;
        return result ;
}

function PrimeNumbers(num1, num2) {
    let primeArr = [];
    for (let i = num1; i <= num2; i++) {
        if (isPrime(i)) {
            primeArr.push(i);
        }
    }
        return primeArr;
}


console.log(PrimeNumbers(1, 200));