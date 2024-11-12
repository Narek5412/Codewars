function countSheeps(sheep) {
    let result = 0;
    for (let i = 0; i < sheep.length; i++) {
        let boolean = (sheep[i] === true) ? result += 1 : result += 0;
    }
    ;
    return result;
}

console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));
