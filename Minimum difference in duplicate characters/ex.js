function minRepeatingCharacterDifference(text) {
    let obj = {};  // Use an object to store the first occurrence index of each character
    let index = Infinity;  // Store the minimum difference between repeating characters
    let resultChar = null;    // The character with the minimum difference

    for (let i = 0; i < text.length; i++) {

        if (obj.hasOwnProperty(text[i])) {
            let diff = i - obj[text[i]];  // Calculate the difference between the current and previous index

            // If this difference is smaller than the previous minimum, update it
            if (diff < index) {
                index = diff;
                resultChar = text[i];
            }
        } else {
            // If it's the first occurrence of the character, store its index
            obj[text[i]] = i;
        }
    }

    // If no repeating characters were found, return null
    if (resultChar !== null) {
        return [index, resultChar];
    } else {
        return null;
    }
}console.log(minRepeatingCharacterDifference("abcaba"));