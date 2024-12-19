function sortPositiveNegative(arr) {
    let positive = [];
    let negative = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positive.push(arr[i]);
        } else {
            negative.push(arr[i]);
        }
    }

    return positive.concat(negative);
}

let inputArray = [1, -2, 3, -4, 5, -6];
let sortedArray = sortPositiveNegative(inputArray);
console.log(sortedArray);
