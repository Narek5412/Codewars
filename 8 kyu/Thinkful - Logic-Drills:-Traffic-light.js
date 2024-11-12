function updateLight(current) {
    let result = (current === "green") ? "yellow" :
        (current === "yellow") ? "red" : "green"
    return result;
}

console.log(updateLight("green"))
