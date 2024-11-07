// 1. 묵시적 형변환
// -> 자바 스크립트 엔진이 알아서 형변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(num + str); // num 에 저장된 10이 묵시적으로 문자열로 변환되었어~ 1020출력

//2. 명시적 형변환
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2); // 숫자가 앞에 있으면 굿
console.log(strToNum2);

let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");
