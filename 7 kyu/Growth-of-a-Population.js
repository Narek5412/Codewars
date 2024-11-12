function nbYear(p0, percent, aug, p) {
    // your codeI'm
    let years = 0;
    for (population = p0; population < p; years += 1) {
        population += (percent / 100) * population + aug
        let result = (population % 1 !== 0) ? population -= (population % 1) : population
    }
    return years
}

console.log(nbYear(1500, 5, 100, 5000));
