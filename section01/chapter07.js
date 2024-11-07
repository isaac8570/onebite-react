// 2024. 11. 7.
// 자바스크립트 연산자에 대해 알아봅시다

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 1;
// - * / % 등등
// console.log((1 + 2) * 10);

// 3. 복합 대입 연산자
let num2 = 10;
num2 += 7;

// 4. 증감 연산자
let num3 = 10;
num3++;
// 11

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // == 2개만 쓰면 자료형은 비교하지 않음, === 3개를 써야 형이 같은지도 알 수 있음
let comp2 = 1 != 2;
console.log(comp1, comp2);
let comp3 = 2 > 1;
let comp4 = 1 > 2;
console.log(comp3, comp4);
