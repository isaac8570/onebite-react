// 스코프에 대해 알아봅시당
// -> 전역/지역 스코프

let a = 1; // 전역 스코프를 갖는 변수
function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
  function funcB() {
    // 함수 안에서 선언된 함수 밖에서 호출 못해요
    // -> 지역 스코프 함수이기 때문!
  }
}
funcA();
if (true) {
  let c = 3; // 지역 스코프
}
// .. for문도 마찬가지~ 중괄호 안은 다 지역 스코프로 선언됨
