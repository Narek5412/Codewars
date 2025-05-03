function isPangram(str) {
    str = str.toLowerCase()
    let word = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < str.length; j++) {

            if (str.indexOf(word[i]) >= 0) {
                break
            } else
            {
                return false
            }
        }
    }
    return true
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram."))