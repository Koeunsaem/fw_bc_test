const prompt = require('prompt-sync')();

let n;
let sum = 0;

do {
    n = parseInt(prompt());
    if (n <= 0) {
        console.log("X");
    }
} while (n <= 0);

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(sum);