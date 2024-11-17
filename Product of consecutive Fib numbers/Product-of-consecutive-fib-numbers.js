/**Your function takes an integer (prod) and returns an array/tuple
 (check the function signature/sample tests for the return type in your language):
 if F(n) * F(n+1) = prod:
 (F(n), F(n+1), true)
 If you do not find two consecutive F(n) verifying F(n) * F(n+1) = prod:
 (F(n), F(n+1), false)
 where F(n) is the smallest one such as F(n) * F(n+1) > prod.
 Examples:
 714 ---> (21, 34, true)
 --> since F(8) = 21, F(9) = 34 and 714 = 21 * 34
 800 --->  (34, 55, false)
 --> since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
 */
function productFib(prod){
    let arr= [ 0, 1 ]
    for(let i = 0; arr[i] * arr[i +1] < prod; i ++){
        arr.push(arr[i] + arr[i +1])
    }let result = arr.splice(arr.length -2, arr.length)
    if(result[0] * result[1] === prod){
        result.push(true)
    }else{
        result.push(false)
    }return result
}console.log(productFib(714))