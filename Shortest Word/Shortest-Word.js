/*Simple, given a string of words, return the length of the shortest word(s).
 String will never be empty and you do not need to account for different data types.
*/
debugger;
function findShort(s){
    let arr = s.split(" ");
    let result = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(result.length >= arr[i].length){
            result = arr[i]

        }
    }return result.length
}console.log(findShort("bitcoin take over the world maybe who knows perhaps"));