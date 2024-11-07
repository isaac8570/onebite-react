// 1. 함수 표현식

function funcA() {
  // console.log("funcA");
}
let varA = funcA;
// console.log(varA); // -> 함수 선언문 그 자체가 출력된다
varA(); // -> 함수를 이렇게 변수에 담을 수가 있다!

let varB = function funcB() {
  // 익명함수 -> 값으로서 함수를 선언, 호이스팅 대상이 아니에요
  // console.log("funcB");
};
varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
};
// 이렇게도 쓸 수 있어요
varC = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varC(10));
