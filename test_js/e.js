const prompt = require('prompt-sync')();

// 윤년 여부를 확인하는 함수
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 달의 날 수를 계산하는 함수
function getDaysInMonth(year, month) {
    if (month === 2) {
        // 2월의 경우 윤년인지 확인
        return isLeapYear(year) ? 29 : 28;
    } else if ([4, 6, 9, 11].includes(month)) {
        // 4, 6, 9, 11월은 30일
        return 30;
    } else {
        // 그 외의 달은 31일
        return 31;
    }
}

// 사용자로부터 연도와 월 입력받기
const year = parseInt(prompt());
const month = parseInt(prompt());

// 입력한 달의 날 수 계산 및 출력
const days = getDaysInMonth(year, month);
console.log(days);
