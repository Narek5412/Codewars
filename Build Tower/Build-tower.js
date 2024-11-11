/*Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive
integer number of floors. A tower block is represented with "*" character.
For example, a tower with 3 floors looks like this:
[
    "  *  ",
    " *** ",
    "*****"
]
And a tower with 6 floors looks like this:
[
    "     *     ",
    "    ***    ",
    "   *****   ",
    "  *******  ",
    " ********* ",
    "***********"
]
 */
function towerBuilder(nFloors) {
    let arr = [];
    for(let i = 1; i <= nFloors; i++) {
        let line = "";
        for(let j = 0; j < nFloors * 2-1; j++) {
             if(j < nFloors - i){
                line += " "
            }else if(j < (nFloors + i - 1)) {
                line += "*"
            }else{
                 line += " "
             }
        }arr.push(line);
    }return arr
}console.log(towerBuilder(4))