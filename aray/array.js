debugger

function array(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j] && !newArr.includes(arr2[j])) {
                newArr.push(arr2[j]);
            }

        }
    }
    return newArr;
}

console.log(array([1, 3, 5, 1, 8, 1, 5], [10, 5, 9, 7, 5, 5, 1, 1]))