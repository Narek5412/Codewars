/**You have £2000 and want to earn £x in interest after n years. Calculate the interest rate, as
 a percentage to 2 decimal points, required to achieve your goal.
 */
function interest(x,n){
    let money = 2000
    let procent = ((((1+x/money)**(1/n))-1)*10000)
    return Math.round(procent)/100
}console.log(interest(2456,3))