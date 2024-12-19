function findSmallestMissingPositive(arr) {
    const set = new Set(arr);
    let i = 1;
    while (set.has(i)) {
        i++;
    }
    return i;
}

const a = [2, -3, 4, 1, 1, 7];
console.log(findSmallestMissingPositive(a)); 