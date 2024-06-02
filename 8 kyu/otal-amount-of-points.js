function points(games) {
let Points = 0
    for(let i = 0,gamePoint = 0;i < 10;i++,Points += gamePoint){
        let x = games[i][0];
        let y = games[i][2];
        let result =(x>y)?gamePoint = 3:
        (x<y)? gamePoint = 0:gamePoint = 1;
    }
    return Points;
}console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))