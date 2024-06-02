function lovefunc(flower1, flower2){
    // moment of truth
    let result =((flower1%2 ===0 && flower2%2 === 1)||(flower1%2 ===1 && flower2%2 ===0))?true:false;
    return result;
}console.log(lovefunc(1,4))
