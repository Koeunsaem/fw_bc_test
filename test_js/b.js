const prompt = require('prompt-sync')();

const inputChar = prompt();

function checkVowel(char) {
    // 모음 리스트를 설정
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // 입력된 문자가 모음 리스트에 포함되어 있는지 확인
    if (vowels.includes(char)) {
        return "O";
    } else {
        return "X";
    }
}

const result = checkVowel(inputChar);
console.log(result);
