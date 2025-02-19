/**Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
 */
function isSortedAndHow(arr) {
    let change = false
    for(let i = 0 ; i < arr.length ; i++){
        if(i === arr.length -1){
            change = true
        }
        if(arr[0]>arr[1]){
            if(arr[i]>arr[i+1] && i+1 < arr.length ){
                continue
            }else{
                break
            }
        }else if(arr[0]<arr[1]){
            if(arr[i]<arr[i+1] && i+1 < arr.length ){
                continue
            }else{
                break
            }

        }
    }if(arr[0] > arr[1] && change === true){
        return "yes, descending"
    }else if(arr[0] < arr[1] &&change === true){
        return "yes, ascending"
    }else if(change === false)return "no"
}
  console.log(isSortedAndHow([1,1,3,4,5,6,7,8,9]));

