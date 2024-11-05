/*Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James.
Since James doesn't know how to make this happen, he needs your help.
    Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.
 Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a
diamond of even or negative size.
    Examples
A size 3 diamond:
    *
   ***
    *
...which would appear as a string of " *\n***\n *\n"
A size 5 diamond:
    *
   ***
  *****
   ***
    *
...that is:"  *\n ***\n*****\n ***\n  *\n"
 */
function diamond(n){
    let result = ""
    if(n % 2 === 0 || n < 0){
        return null
    }
    for(let i = 0; i < n/2; i++){
let line = ""
        for(let j = 0; j < n; j++){
        if(i === 0){
            line += "*"
        }else if(j >= i && j <= n-i-1 ){
            line += "*"
        }else{
            line += " "
        }
        }if(i!== Math.floor(n / 2)){
        result += (line.trimEnd()+ "\n")
        }else {
            result += line.trimEnd()
        }
    } let arr = result.split("\n");
    return ((arr.slice(1, arr.length)).reverse().concat(arr).join("\n")+"\n")


}console.log(diamond(11));