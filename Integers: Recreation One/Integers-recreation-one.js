/**1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get:
  1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.
 Task
 Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of
 their squared divisors is itself a square.
 We will return an array of subarrays or of tuples (in C an array of Pair) or a string.
 The subarrays (or tuples or Pairs) will have two elements: first the number the squared
 divisors of which is a square and then the sum of the squared divisors.
 Example:
 list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
 list_squared(42, 250) --> [[42, 2500], [246, 84100]]
 The form of the examples may change according to the language, see "Sample Tests".
 Note
 In Fortran - as in any other language - the returned string is not permitted to contain any
 redundant trailing whitespace: you can use dynamically allocated character strings.
 */

function listSquared(m, n) {
    let arr = []
    let countArr = []
    for(let i = m; i <= n; i++) {
        for(let j = i; j >= 0; j--) {
            if(i % j=== 0){
                countArr.push(j)
            }
        }countArr = countArr.map((a)=>a**2)
        if((countArr.reduce((a,b)=>a+b)**(1/2))%1===0){
         arr.push([i,countArr.reduce((a,b)=>a+b)])
        }
        countArr = []
    }return arr
}console.log(listSquared(2, 250));

