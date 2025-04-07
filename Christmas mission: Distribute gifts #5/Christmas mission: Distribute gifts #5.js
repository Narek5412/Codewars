/**When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy
 * the process --myjinxin2015 said

 Description:
 Christmas is coming soon. Santa Claus is ready for the gift, he will give the gifts to the children. He's been sitting
 on a sled and ready to start. Today's mission is to send gifts to some children(1-26 children, use A-Z to represent them).

 A argument map will be given, like this:

 map =           //It's a multi-line string that separated by "\n"
 .....A....
 ..s.......
 ..........
 ....C.....
 ......B...
 The lowercase letter s is Santa Claus, the capital letters are the children. Santa is from A to Z in order to give
 gifts, he will only move up , down, left or right, each move is 1 kilometers. Your task is to calculate how many
 kilometers he has traveled when he finished the task today. In accordance with the above example, the results should be:

 4(s to A)+5(A to B)+3(B to C) === 12
 If the map does not have the child's coordinates, return 0; If there is no Santa's coordinates on the map, return
 "Where is Santa Claus?"

 Note:
 In the map, the length of each row are the same.
 The capital letter is not always start from A
 There will be no duplicate capital letters in the map.
 You can assume that Santa Claus can go through a child's home to another child's home, because he is flying in the air,
 so do not need to detour ;-)
 Some Examples
 map =
 `.....A....
 ..s.......
 ..........
 ....C.....
 ......B...`
 distributeGifts(map) === 12

 map =
 `.....Y....
 ..s.......
 ..........
 ....X.....
 ......Z...`
 distributeGifts(map) === 13

 map =
 `X....A....
 ..s.......
 .........B
 ..........
 ......Y...`
 distributeGifts(map) === 31

 map =
 `..........
 ..s.......
 ..........
 ..........
 ..........`
 distributeGifts(map) === 0

 map =
 `X....A....
 ..........
 .........B
 ..........
 ......Y...`
 distributeGifts(map) === "Where is Santa Claus?"
 */
function distributeGifts(map){
    if(!map.includes('s')){
        return "Where is Santa Claus?"
    }
    let kid = "sABCDEFGHIJKLMNOPQRSTUVWXYZ"
    map = map.split('\n')
    for(let i = 0; i < kid.length; i++){
        let countOfKid
        for(let j = 0; j < map.length; j++){
            let countOfMap
           if(map[j].indexOf(kid[i])){
               countOfMap = j + map[j].indexOf(kid[i])
           }
        }
    }
}console.log(distributeGifts(`X....A....
 ..........
 .........B
 ..........
 ......Y...`))
