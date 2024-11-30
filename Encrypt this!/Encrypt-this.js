/**Acknowledgments:
 I thank yvonne-liu for the idea and for the example tests :
 Description:
 Encrypt this!
 You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
 Your message is a string containing space separated words.
 You need to encrypt each word in the message using the following rules:
 The first letter must be converted to its ASCII code.
 The second letter must be switched with the last letter
 Keepin' it simple: There are no special characters in the input.
 Examples:
 encryptThis("Hello") === "72olle"
 encryptThis("good") === "103doo"
 encryptThis("hello world") === "104olle 119drlo"
 */
function encryptThis(text) {
    let result = "";
    let arr = text.split(" ")
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length;j++){
            if(j === 0 ){
                result += arr[i].charCodeAt(j)
            }else if(j === 1){
                result += arr[i][arr[i].length-1]
            }
            else if(j >= 2 && j < arr[i].length - 1){
                result += arr[i][j]
            }else{
                result += arr[i][1]
            }
        }if(i !== arr.length - 1){
            result += " "
        }
    }return result
}
//console.log(encryptThis("hello world"));
console.log(encryptThis("A wise old owl lived in an oak"));