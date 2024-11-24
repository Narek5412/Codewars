/**Your task, is to create N×N multiplication table, of size provided in parameter.
 For example, when given size is 3:
 1 2 3
 2 4 6
 3 6 9
 For the given example, the return value should be:
 [[1,2,3],[2,4,6],[3,6,9]]
 */
let multiplicationTable = function (size) {
    let result = []
    for (let i = 0; i < size; i++) {
        result[i] = []
        for (let j = 0; j < size; j++) {
            if (i === 0) {
                result[i][j] = j + 1
            } else {
                result[i][j] = result[0][j] * (i + 1)
            }
        }
    }
    return result
}
console.log(multiplicationTable(3));
