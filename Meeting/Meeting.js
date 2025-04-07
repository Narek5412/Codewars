/**John has invited some friends. His list is:
 s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
 Could you make a program that
 makes this string uppercase
 gives it sorted in alphabetical order by last name.
 When the last names are the same, sort them by first name. Last name and first name of a guest come in the
 result between parentheses separated by a comma.
 So the result of function meeting(s) will be:
 "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
 It can happen that in two distinct families with the same family name two people have the same first name too.
 Notes
 You can see another examples in the "Sample tests".
 */

function meeting(s) {
    let reversStr = s.split(":").join(";").split(";").reverse().join(",")
    let arr = []
    let count = 0
    let str = ""
    for (let i = 0; i < reversStr.length; i++) {
        if(reversStr[i] === "," && count === 0){
            str+= " "
            count++
        }else if(reversStr[i] === ","){
            count ++
        }
        else if(count ===2){
            arr.push(str)
            count = 0
            str = reversStr[i]
        } else{
            str += reversStr[i]
        }

    }
    arr = arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join(" ").split(" ")
    console.log(arr)
    let result = ``
    for(let i = 0; i < arr.length; i = i + 2){
        result += `(${arr[i] + ", " + arr[i+1] })`
    }return result
}console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))