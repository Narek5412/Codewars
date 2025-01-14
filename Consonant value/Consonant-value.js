/**Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant
 substrings. Consonants are any letters of the alphabet except "aeiou".
 We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
 For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"
 "zodiac" -> 26
 The consonant substrings are: "z", "d" and "c" with values "z" = 26, "di" = 4 and "c" = 3. The highest is 26.
 "strength" -> 57
 The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49.
 The highest is 57.
 For C: do not mutate input.
 More examples in test cases. Good luck!
 */

function solve(s) {
    let count = 0;
    let lastCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u") {
            if (count > lastCount) {
                lastCount = count;
            }
            count = 0
            continue
        }
        count += s.charCodeAt(i) - 96;
    }
    if (lastCount === 0 || count > lastCount) {
        return count
    }
    return lastCount
}

console.log(solve("buouuoooaooeieeouoiaeouiieuooaeiiuiiieiuaaiiaaiyitaeayakhgbucowxfoeiikloaoivticsrtieuuabghegnedyoojineaeaeyuzyodapuivarvmkvffyuihezmlievlveiiziooucozpiupdnmapofrwlkratpvayejhwkrnwhgmhs"))

