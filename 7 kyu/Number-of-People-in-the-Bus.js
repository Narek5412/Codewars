var number = function(busStops){
    let result = 0
    for(let i = 0;i < busStops.length;i++){
        let x = busStops[i][0]
        let y = busStops[i][1]
        result += x - y
    }return result
};console.log(number([[10,0],[3,5],[5,8]]))