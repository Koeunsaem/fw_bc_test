const prompt = require('prompt-sync')();

// 역순으로 변환하는 함수
function reverseNumber(num) {
    let reversedString = num.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}

// 사용자로부터 세 자리 정수를 입력받기
const inputNumber = prompt();
const reversedNumber = reverseNumber(inputNumber);

console.log(reversedNumber);