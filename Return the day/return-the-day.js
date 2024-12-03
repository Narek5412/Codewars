/**Complete the function which returns the weekday according to the input number:

 1 returns "Sunday"
 2 returns "Monday"
 3 returns "Tuesday"
 4 returns "Wednesday"
 5 returns "Thursday"
 6 returns "Friday"
 7 returns "Saturday"
 Otherwise returns "Wrong, please enter a number between 1 and 7"
 */

function whatday(num) {
    let weak = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return num > 0 && num <= 7 ? weak[num - 1] : 'Wrong, please enter a number between 1 and 7'
}console.log(whatday(3));
console.log(whatday(8));