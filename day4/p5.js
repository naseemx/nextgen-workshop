const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getStringLength(str) {
    let length = 0;

   
    for (let i = 0; str[i] !== undefined; i++) {
        length++;
    }

    return length;
}


rl.question('Enter a string to find its length: ', (userInput) => {
   
    const length = getStringLength(userInput);

    console.log('The length of the string is:', length);

    
    rl.close();
});