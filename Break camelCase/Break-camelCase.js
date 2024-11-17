/**Complete the solution so that the function will break up camel casing, using a space between words.

 Example
 "camelCasing"  =>  "camel Casing"
 "identifier"   =>  "identifier"
 ""             =>  ""
 */
function solution(string) {
    let str = ""
    if (string.toLowerCase() === string) {
        return string
    } else {
        for (let elem of string) {
            if (elem.toUpperCase() === elem) {
                str += ` ${elem}`
            } else {
                str += elem
            }
        }
    }
    return str
}

console.log(solution("camelCasing"));