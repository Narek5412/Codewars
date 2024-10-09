/*In this Kata, you will be given an array of numbers in which two
numbers occur once and the rest occur only twice. Your task will
be to return the sum of the numbers that occur only once.
For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers
7 and 8 occur once, and their sum is 15. Every other number occurs twice.
    More examples in the test cases.
    Good luck!
    If you like this Kata, please try:
 */

function repeats(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j = i+1;j<arr.length+1;j++){
            if(arr[i]===arr[j]){
                arr.splice(i,1);
                arr.splice(j-1,1);
                i -= 1
               break;
            }
        }
    }
    return arr.reduce((sum,val)=>sum+val,0)
}//console.log(repeats([9, 10, 19, 13, 19, 13]));
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]))