/*Create a function (a method in Ruby, an extension method in C#)
every which returns every nth element of an array.
    Usage
With one argument, every(array) returns every element of the array.
With two arguments, every(array, interval) it returns every intervalth element.
With three arguments, every(array, interval, start_index) returns every intervalth element starting at index start_index.
    Examples
every([0,1,2,3,4])     -> [0,1,2,3,4]
every([0,1,2,3,4],1)   -> [0,1,2,3,4]
every([0,1,2,3,4],2)   -> [0,2,4]
every([0,1,2,3,4],3)   -> [0,3]
every([0,1,2,3,4],3,1) -> [1,4]
Notes
Test cases:
    interval will always be a positive integer (but may be larger than the size of the array).
start_index will always be within the bounds of the array.
 */debugger
function every(arr, interval, start){
     let newArr =[];
    if(interval > 0 && start >0){
        let i = start
        while(i<arr.length){
           newArr.push(arr[i]);
           i += interval;
        }
    }else if(interval > 0){
        let i = 0 ;
        while(i<arr.length){
            newArr.push(arr[i]);
            i += interval;
        }
    }else {
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
    }return newArr
}console.log(every([0,1,2,3,4]));
 console.log(every(["rock",{"50":"L"},{"100":"C"},1,null,"b",null,"c",0,"a",3,2,4,null,"scissors",{"10":"X"}],2,6))