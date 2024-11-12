function isPalindrome(x) {
    x = x.toLowerCase()
    let j = x.length
    for (let i = 0; i < j; i++, j--) {
        if (x[i] != x[j - 1])
            return false
    }
    return true
}

console.log(isPalindrome("anndggdnna"));