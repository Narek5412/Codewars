/*Numbers ending with zeros are boring.

    They might be fun in your world, but not here.

    Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

 */

/*
function noBoringZeros(n) {
   arr = ('' + n).split('')
    while(true){
        if(arr[arr.length - 1] == 0) {
            arr.pop();
        }else{
            break
        }
        }return arr.join('');
}console.log(noBoringZeros(145000));
*/


function noBoringZeros(n) {
    while (n % 10 == 0 && n != 0) {
        n /= 10;
    }
    return n;
}

console.log(noBoringZeros(145000));

