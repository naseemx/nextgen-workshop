function findPrimeNumbers(numbers) {
    const isPrime = num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return numbers.filter(isPrime);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findPrimeNumbers(numbers));
