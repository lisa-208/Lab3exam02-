function decodeSnakeAlphabet(number) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    while (number > 0) {
        let remainder = number % 26;
        if (remainder === 0) {
            remainder = 26;
            number--;
        }
        result = alphabet[remainder - 1] + result;
        number = Math.floor(number / 26);
    }

    return result;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a positive integer: ', (input) => {
    const parsedInput = parseInt(input);

    if (isNaN(parsedInput) || parsedInput <= 0) {
        console.log("Please provide a valid positive integer.");
    } else {
        const decodedLetter = decodeSnakeAlphabet(parsedInput);
        console.log(`Corresponding letter: ${decodedLetter}`);
    }

    rl.close();
});