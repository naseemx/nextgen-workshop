function getArrayFromUser() {
    let arr = [];
    let n = parseInt(prompt("Enter the number of elements in the array:"));
    for (let i = 0; i < n; i++) {
        let value = parseInt(prompt(`Enter element ${i + 1}:`));
        arr.push(value);
    }
    return arr;
}

function selectionSort(arr, order = 'ascending') {
    for (let i = 0; i < arr.length - 1; i++) {
        let extremeIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (order === 'ascending' ? arr[j] < arr[extremeIndex] : arr[j] > arr[extremeIndex]) {
                extremeIndex = j;
            }
        }
        let temp = arr[extremeIndex];
        arr[extremeIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let arr = getArrayFromUser();
let order = prompt("Enter sorting order (ascending/descending):").toLowerCase();

console.log("Before sorting: ", arr);
console.log("After sorting: ", selectionSort(arr, order));
