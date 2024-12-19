function rotateArrayByOne(arr) {
    if (arr.length === 0) return arr;
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}

let array = [1, 2, 3, 4, 5];
console.log(rotateArrayByOne(array));
