/**Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

 Examples:

 'abc' =>  ['ab', 'c_']
 'abcdef' => ['ab', 'cd', 'ef']
 */

function solution(str) {
    let arr = []
    let result = ""
    if (str.length === 0) {
        return arr
    } else if (str.length % 2 === 1) {
        str += "_"
    }
    for (let i = 0; i <= str.length; i++) {
        if (i % 2 === 0 && i > 0) {
            arr.push(result)
            result = ""
            result += str[i]
        } else {
            result += str[i]
        }
    }
    return arr
}

console.log(solution("abcdefg"))
