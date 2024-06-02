function smash (words) {
    let k = ""

    for(let i = 0; i<words.length; i++){
        if(i>0){
            k = k + " " + words[i]
        }else{
            k = k + words[i]
        }
    }return k
};
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));