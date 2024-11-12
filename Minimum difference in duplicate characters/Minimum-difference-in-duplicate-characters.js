/**Task
 Write a function that takes a string and finds a repeating character in the string (there may be multiple
 repeating characters). The function should return the minimum difference between the indices of these characters,
 and the character itself.
 For example, in the string "aabcba", the minimum position difference of repeated characters will be equal
 to 1, since for the character a, the position difference is 1.
 The output should be in the form of an array.
 If there are no duplicate characters in the string, it should return null.
 The string can only contain lowercase letters, and nothing else!!! (an empty string is not allowed).
 If the difference between repeated characters is the same, return the first minimal difference encountered.
 Examples of outputs:
 "aa" => new Object[]{1, 'a'}
 "aabbca" => new Object[]{1, 'a'}
 "abka" => new Object[]{3, 'a'}
 "abcded" => new Object[]{2, 'd'}
 "abbbbbc" => new Object[]{1, 'b'}
 "abc" => null
 */
function minRepeatingCharacterDifference(text) {
    let obj = {};
    let size = 0;
    for (let i = 0; i < text.length; i++) {
        if (!obj.hasOwnProperty(text[i])) {
            obj[text[i]] = [0, text[i]];
            size++
        }
        for (let j = i + 1; j < text.length; j++) {
            if (text[i] === text[j] && obj[text[i]][0] === 0 || (text[i] === text[j] && obj[text[i]][0] > j - i)) {
                obj[text[i]][0] = j - i;
                break
            } else if (obj[text[i]][0] === 1) {
                return obj[text[i]]
            }
        }
    }
    let result = obj[text[0]]
    for (let key in obj) {
        if (result[0] === 0) {
            result = obj[key]
        }
        if (result[0] > obj[key][0] && obj[key][0] !== 0) {
            result = obj[key]
        } else if (result[0] === 0 && size === 1) {
            return null
        }
        size--;
    }
    return result
}

console.log(minRepeatingCharacterDifference("abacdbabcadbc"))
console.log(minRepeatingCharacterDifference("lknbofcujupgwowopatlwhapz"))