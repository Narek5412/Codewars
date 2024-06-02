let numbers = [50, 30, 20, 10, 40];
let arr = [];
let indexOfSmallestNumber = 0;
let num = numbers[0]
let i = 1;
let j = 0;

while ( i < numbers.length){
    if (numbers[i] < num) {
        num = numbers[i];
        indexOfSmallestNumber = i;

    } i++;
}
i = 0;
while(i < numbers.length){
    if(i !== indexOfSmallestNumber){
        arr[j] = numbers[i];
        j++;
    } i++;
}
console.log(arr);