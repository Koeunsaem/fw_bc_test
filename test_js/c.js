const prompt = require('prompt-sync')();

// 사용자로부터 나이와 키를 입력받기
const age = parseInt(prompt());
const height = parseInt(prompt());

// 입장 가능 여부 판단 함수
function canEnterPlayground(age, height) {
    if (age >= 14 || height >= 160) {
        return "X"; // 입장 불가
    } else {
        return "O"; // 입장 가능
    }
}

// 결과 출력
const result = canEnterPlayground(age, height);
console.log(result);
