function removeEveryOther(arr){
    //your code here
    let newArr = [];
    let k = 0;
    for(let i = 0; i<arr.length; i++){
        if(i % 2 === 0){
            newArr[k] = arr[i];
            k += 1;
        }
    }return newArr
}console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
