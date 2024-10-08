/*Given an array of integers of any length, return an array that has
1 added to the value represented by the array.
If the array is invalid (empty, or contains negative integers or
integers with more than 1 digit), return nil (or your language's equivalent).
Examples
Valid arrays
    [4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
    [1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
    [9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
    [0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)
Invalid arrays
    [] is invalid because it is empty
    [1, -9] is invalid because -9 is not a non-negative integer
    [1, 2, 33] is invalid because 33 is not a single-digit integer
 */
function upArray(arr){
   if(arr.length < 1){
       return null
   }
    for(let i = arr.length - 1; i  >= 0 ; i--){
        if(arr[i] < 0 || arr[i] > 9 ){
            return null
        }else if (arr[arr.length -1]=== 9){
            arr[arr.length -1] += 1
            for(let j = i; j  >= 0; j--){
                if(arr[j]===10 && j === 0){
                    arr.unshift(1)
                    arr[j+1]= 0
                }else if(arr[j]===10 ){
                    arr[j - 1]  += 1
                    arr[j] = 0
                }
            }
        }else if(i === arr.length - 1 ){
            arr[i] += 1
        }
    }
    return arr
}console.log(upArray([-8,8]));
console.log(upArray([0,7,5,8,2,2,9,6,3,8,2,3,3,1,0,6,5,8,0,0,8,9,7,5,9,6,5,9,7,3,1,6,5,9]));


