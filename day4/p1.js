const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter operator (+, -, *, /): ', (operator) => {
    rl.question('Enter first number: ', (num1) => {
        rl.question('Enter second number: ', (num2) => {
            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);
            let r;

            if (operator === '+') {
                r = number1 + number2;
            } else if (operator === '-') {
                r = number1 - number2;
            } else if (operator === '*') {
                r = number1 * number2;
            } else if (operator === '/') {
                r = number1 / number2;
            } else {
                console.log('Invalid operator!');
                rl.close();
                return;
            }

            console.log(`${number1} ${operator} ${number2} = ${r}`);
            rl.close();
        });
    });
});
