/*You will be given an array and a limit value.
You must check that all values in the array are below
or equal to the limit value. If they are, return true.
Else, return false.
You can assume all values in the array are numbers.
*/
debugger;
function smallEnough(a, limit){
  let a1 = a.filter(function(val){
        return val <= limit;
    });
    if(a1.length === a.length){
        return true
    }else{
        return false
    }
}console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120))