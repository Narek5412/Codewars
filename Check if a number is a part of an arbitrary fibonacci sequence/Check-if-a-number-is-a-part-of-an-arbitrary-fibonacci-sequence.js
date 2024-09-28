/*You will be given a function, isFibo, which will take three arguments:
a, b and f.
a is the first term of a Fibonacci sequence, b is the second term of this
sequence ( it will always be bigger than or equal to a and they'll be both
always positive, so don't worry about pesky input checking ) and f is a
number which you'll need to check whether or not is a part of this Fibonacci sequence.
Good luck, muh fellow coding warrior.
*/debugger
function isFibo(a,b,f) {
    let arr = [a,b];
    for (let i= 1;arr[i] < f;i++){
        arr[i + 1]=arr[i] + arr[i - 1];
        if(arr[i + 1]===f){
            return true
        }else if(arr[i + 1] < f){
            continue
        }else{
            return false
        }
    }if(a===f || b===f){
        return true
    }
}console.log(isFibo(100,101,301))
console.log(isFibo(1,3,1))