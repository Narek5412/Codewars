/**You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string
 consisting of k consecutive strings taken in the array.
 Examples:
 strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
 Concatenate the consecutive strings of strarr by 2, we get:
 treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
 folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
 trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
 blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
 abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
 Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
 The first that came is "folingtrashy" so
 longest_consec(strarr, 2) should return "folingtrashy".
 In the same way:
 longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
 n being the length of the string array, if n = 0 or k > n or k <= 0 return ""
 (return Nothing in Elm, "nothing" in Erlang).
 Note
 consecutive strings : follow one after another without an interruption
 */

function longestConsec(strArr, k) {
    if (strArr.length === 0 || k > strArr.length || k <= 0) {
        return "nothing"
    }
    let count = 0
    let result = ""
    let trialLength = 0
    let trialResult = ""
    for (let i = 0; i <= strArr.length - k; i++) {
        for (let j = 0; j < k; j++) {
            trialLength += strArr[i + j].length
            trialResult += "" + strArr[i + j]
            if ((count < trialLength || count === 0) && j === k - 1) {
                count = trialLength
                result = trialResult
                trialLength = 0
                trialResult = ""
            } else if (j === k - 1) {
                trialLength = 0
                trialResult = ""
            }
        }
    }

    return result

}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
console.log(longestConsec(["zone"], 2))