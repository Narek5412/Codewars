function century(year) {
    // Finish this :)
    let century = (year % 100 === 0)? year / 100:(100 - (year % 100)+year) / 100 ;
 return century;
}console.log(century(2001))