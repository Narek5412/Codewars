function getGrade (s1, s2, s3) {
    // Code here
    let result =((s1+s2+s3)/3>=90 && (s1+s2+s3)/3<=100 )? "A":
     ((s1+s2+s3)/3>= 80 && (s1+s2+s3)/3<90)? "B":
         ((s1+s2+s3)/3>=70 && (s1+s2+s3)/3<80)?"C":
    ((s1+s2+s3)/3>=60 && (s1+s2+s3)/3<70)? "D":"F";
    return result;
}console.log(getGrade(100,85,96));