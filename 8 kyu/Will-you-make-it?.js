const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
   let result= (distanceToPump<=mpg * fuelLeft )?true:false;
   return result;
}; console.log(zeroFuel(50, 25, 2));