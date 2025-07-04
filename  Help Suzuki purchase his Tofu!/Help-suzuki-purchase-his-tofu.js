/**Help Suzuki purchase his Tofu!
 Suzuki has sent a lay steward to market who will purchase some items not produced in the monastary gardens for the
 monks. The stewart has with him a large box full of change from donations earlier in the day mixed in with some
 personal items. You will be given a string of items representing the box.
 Sort through the items in the box finding the coins and putting aside anything else.
 You will be given a data structure similar to the one below.
 box = 'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon
 mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon'
 Return the following in your solution.
 [count of mon coins in box, count of monme coins in box,sum of all coins value in box,
 minimum number of coins needed for Tofu]
 100 ≤ cost ≤ 1000
 cost = 124
 returns
 [45, 5, 345, 6]
 The coins have the following values:
 monme = 60
 mon = 1
 Determine the minimum number of coins to pay for tofu. You must pay with exact change and if you do not have the
 correct change return “leaving the market”.
 If the cost of tofu is higher than your total amount of money also return “leaving the market”
 Please also try the other Kata in this series..
 */
function buyTofu(cost,box){

    let countOfMoney = {
        mon:0,
        monme:0
    }

    for(let item of box.split(" ")){
        if((item === "mon" || item ==="monme")){
            countOfMoney[item]++
        }else{
            continue
        }
    }let result = [countOfMoney.mon,countOfMoney.monme,(countOfMoney.mon+countOfMoney.monme*60)]
    let monme = result[1]
    let mon = result[0]
    for(var i = 0, j = 0;i<cost;){
        if(monme > 0 && i+60<=cost){
            i+=60
            j++
            monme--
        }else if(mon > 0 && i+1<=cost){
            i+=1
            j++
            mon--
        }else if(mon === 0 && i <cost){
            return "leaving the market"
        }


    }
    result.push(j)
    return result
}
console.log(buyTofu(124, "mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon"));
console.log(buyTofu(cost = 674, box = "mon mon mon"));
console.log(buyTofu(cost = 5, box = "mon monme"));