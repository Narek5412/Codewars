/**Write Number in Expanded Form
 You will be given a number and you will need to return it as a string in Expanded Form. For example:
 12 --> "10 + 2"
 45 --> "40 + 5"
 70304 --> "70000 + 300 + 4"
 NOTE: All numbers will be whole numbers greater than 0.
 */
function expandedForm(num) {
    let str =""
    for(let i =1;i<=num*10;i*=10){
        if(str === "" && num % i !== 0){
            str +=  (num % i)
            num -= num % i
        }
        else if(num % i !== 0 ){
            str =  (num % i) + " + "  + str
            num -= num % i
        }
    }return str
}console.log(expandedForm(9007053))

