function rearrangeArray(arr) {
    let pos = [];
    let neg = [];

    for (let num of arr) {
        if (num >= 0) pos.push(num);
        else neg.push(num);
    }

    let result = [];
    let i = 0, j = 0;

    while (i < pos.length || j < neg.length) {
        if (i < pos.length) result.push(pos[i++]);
        if (j < neg.length) result.push(neg[j++]);
    }

    return result;
}

let arr = [1, 2, -3, -4, 5, -6, 7, -8, 9];
console.log(rearrangeArray(arr));