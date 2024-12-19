function isEvenPalindrome(number) {
    if (number % 2 !== 0) {
        return false; 
    }
    const numStr = number.toString();
    const reversedStr = numStr.split('').reverse().join('');
    
    return numStr === reversedStr;
}
const number = 4004;
if (isEvenPalindrome(number)) {
    console.log(`${number} is an even palindrome.`);
} else {
    console.log(`${number} is not an even palindrome.`);
}
