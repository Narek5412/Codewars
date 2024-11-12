function openOrSenior(data) {
    let newData = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            newData[i] = 'Senior';
        } else {
            newData[i] = 'Open';
        }
    }
    return newData
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));