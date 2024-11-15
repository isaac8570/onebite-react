// 1. Data 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1); // 실행하는 순간의 날짜와 시간이 나와요

let date2 = new Date("2004-08-20/10:10:10"); // 날짜 시간 설정도 가능
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 월은 1월부터 시작이므로 +1을 해줘야 해~
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // -> 3월이 될 것
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러 포멧으로 출력하기
console.log(date1.toDateString()); // 시간제외날짜만
console.log(date1.toLocaleString()); // 현지 시간방식으로 출력
