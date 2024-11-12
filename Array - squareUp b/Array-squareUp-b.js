/*This is a question from codingbat
Given a non-negative integer n,
create and return an array with the following pattern:

     squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
     squareUp(2) => [0, 1, 2, 1]
     squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
0 <= n <= 1 000
 */
debugger

function squareUp(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            result.push(0);
        }
        for (let j = i; j >= 1; j--) {
            result.push(j);
        }
    }
    return result;
}

console.log(squareUp(4));
