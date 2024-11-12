function filter_list(list) {
    return list.filter((item) => typeof item === "number")
}

console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))