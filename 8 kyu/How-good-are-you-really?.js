function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let average = 0;
    for(let i = 0; i<classPoints.length; i++){
        average += classPoints[i];
    };
    let result =(yourPoints>average/(classPoints.length ))? true:false;
return result;
};console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90],9));