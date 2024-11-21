/**ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the
 alphabet. ROT13 is an example of the Caesar cipher.
 Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special
 characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet
 should be shifted, like in the original Rot13 "implementation".
 */

function rot13(message){
    let index = 0
    let changeMessage = "";
    let word = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for(let i = 0; i < message.length; i++){
        index = word.indexOf(message[i].toLowerCase())
        if(index === -1){
            changeMessage += message[i];
        }
        else if(index >= 13 && message[i].toLowerCase() === message[i]){
            changeMessage += word[index -13];
        }
        else if(index >= 13 && word.indexOf(message[i].toLowerCase())!== -1){
            changeMessage += word[index -13].toUpperCase();
        }else if(index <= 13 &&  message[i].toLowerCase() === message[i]){
            index = word.length-(13-index)
            changeMessage += word[index];
        }
        else if(index <= 13 && word.indexOf(message[i].toLowerCase())!== -1){
            index = word.length-(13-index)
            changeMessage += word[index].toUpperCase();
        }

    }return changeMessage;
}console.log(rot13("implementation"));
console.log(rot13("Test"));
console.log(rot13("Ruby is cool!"));