/**You have an array or list of coordinates or points (e.g. [ [1, 1], [3, 4], ... , [5, 2] ]), and your task is to
 find the area under the graph defined by these points (limited by x of the first and last coordinates as left and
 right borders, y = 0 as the bottom border and the graph as top border).

 Notes:

 x can be negative;
 x of the next pair of coordinates will always be greater than previous one;
 y >= 0;
 the array will contain more than 2 coordinates.
 Example

 x=1 (left border)               x=5 (right border)
 |                      x,y      |
 |                    /\         |
 |                   /  \        |
 |    x,y           /    \       |
 |   /\            /      \      |
 |  /  \    x,y   /        \     |
 | /    \  /\    /          \    |
 |/      \/  \  /            \   |
 |x,y    x,y  \/              \  |
 |            x,y              \ |
 |_____________________________ \x,y_____ y=0 (bottom border)

 The required area:

 |                               |
 |                    /\         |
 |                   /\\\        |
 |                  /\\\\\       |
 |   /\            /\\\\\\\      |
 |  /\\\          /\\\\\\\\\     |
 | /\\\\\  /\    /\\\\\\\\\\\    |
 |/\\\\\\\/\\\  /\\\\\\\\\\\\\   |
 |\\\\\\\\\\\\\/\\\\\\\\\\\\\\\  |
 |\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ |
 |\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\|
 */
function findArea(points) {
    let area = 0;


    for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];

        const width = p2.x - p1.x;
        const heightSum = p1.y + p2.y;

        area += (width * heightSum) / 2;
    }

    return area;
}
    class Point {
        #x;
        #y;

        get x() {
            return this.#x;
        }

        get y() {
            return this.#y;
        }

        constructor(x, y) {
            this.#x = x;
            this.#y = y;
        }
    }


points = [
    new Point(0,0),
    new Point(1, 1),
    new Point(2, 4),
    new Point(3, 2)]
console.log(findArea(points));