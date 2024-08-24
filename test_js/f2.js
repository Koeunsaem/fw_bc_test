const prompt = require('prompt-sync')();

// 입력받기
const input = prompt();
const times = input.split(' ').map(Number);

// 각각의 마킹 시간을 변수에 할당
const [timeA, timeB, timeC] = times;

// 가장 오래 걸리는 시간을 찾기
const maxTime = Math.max(timeA, timeB, timeC);

// 마킹 종료 시 출력될 메시지
setTimeout(() => {
    if (maxTime === timeA) console.log("A 마킹");
    if (maxTime === timeB) console.log("B 마킹");
    if (maxTime === timeC) console.log("C 마킹");
    console.log("시험이 종료되었습니다.");
}, maxTime * 1000);

// 각 학생이 마킹을 끝낸 시간을 출력
setTimeout(() => { if (timeA !== maxTime) console.log("A 마킹"); }, timeA * 1000);
setTimeout(() => { if (timeB !== maxTime) console.log("B 마킹"); }, timeB * 1000);
setTimeout(() => { if (timeC !== maxTime) console.log("C 마킹"); }, timeC * 1000);
