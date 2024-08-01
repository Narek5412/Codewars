function solution(arr) {
    if (arr === null || !Array.isArray(arr)) {
        return [];
    }
    if (arr.length === 0) {
        return [];
    }
    return arr.sort((a, b) => a - b);
}
console.log(solution([1, 2, 10, 50, 5]));