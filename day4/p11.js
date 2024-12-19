function findLongestConsecutiveSubsequence(arr) {
    let set = new Set(arr);
    let longestStreak = 0;

    for (let num of arr) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

const arr = [100, 4, 200, 1, 3, 2];
console.log(findLongestConsecutiveSubsequence(arr)); // Output: 4