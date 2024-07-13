function filter_list(l) {
    // Return a new array with the strings filtered out
    let newArr = [];
    let k = 0;
    for(let i = 0;i<l.length;i++){
        if(l[i] >= 0 && typeof l[i]=== 'number' ){
            newArr[k] = l[i];
            k = k + 1;
        }
    }return newArr;
}console.log(filter_list([1,2,'a','Is-it-a-palindrome?']))