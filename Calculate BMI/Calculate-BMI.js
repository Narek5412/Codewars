function bmi(weight, height) {
    let bmI = weight/(height**2);
    if(bmI <= 18.5){
        return  "Underweight"
    }else if(18.5 <=bmI <= 25.0){
        return "Normal"
    }else if(25.0 <= bmI <= 30.0){
        return "Overweight"
    }else {
        return  "Obese"
    }
}console.log(bmi(80, 1.80));