// // 단락평가 -> or, and 연산

// function returnFalse() {
//   console.log("False 함수");
//   return false;
// }
// function returnTrue() {
//   console.log("True 함수");
//   return true;
// }
// console.log(returnFalse() && returnTrue());
// // -> 앞이 false 이기때문에 앞의 함수만 방문한다 (뒤 방문할 필요도 없음)

// 단락평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName();
printName({ name: "김이삭" });
