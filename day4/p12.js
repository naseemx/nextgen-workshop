function findTriplet(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 24|| arr[i] + arr[j] + arr[k] === 9) {
                    return [arr[i], arr[j], arr[k]];
                }
            }
        }
    }
    return "No triplet found";
}
let array = [8, 1, 0, 15, 9, 3, 6];
console.log(findTriplet(array)); 