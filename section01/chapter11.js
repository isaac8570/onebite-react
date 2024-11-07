// 함수 선언
// function greeting() {
//   console.log("안녕하세요");
// }
// greeting();

let area1 = getArea(10, 20);
console.log(area1);
// 호이스팅, 함수가 아래 선언되어 있어도 알아서 찾아서 끌어온다!

function getArea(width, height) {
  // 자바스크립트는 함수 안에 함수를 또 선언할 수 있어요
  function another() {
    console.log("another");
  }
  another();
  let area = width * height;
  return area;
}

let area2 = getArea(30, 20);
console.log(area2);
