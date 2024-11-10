/**Find the area of a rectangle when provided with one diagonal and one side of the rectangle.
If the input diagonal is less than or equal to the length of the side, return "Not a rectangle".
 If the resultant area has decimals round it to two
places.
 */
function area(d,l){
    if(d <= l ){
        return 'Not a rectangle'
    }
    let row = (d**2 - l**2)**(1/2);
    let area = row * l
    if(area % 0.01 !== 0){
        return Math.round(area * 100)/100
    }
}console.log(area(70,52))
