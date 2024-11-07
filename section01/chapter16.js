// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "lucy",
  color: "gray",
};
animal.age = 2; // 추가
animal.name = "cong"; // 수정
delete animal.color; // 삭제
console.log(animal);
// 상수 객체도 프로퍼티의 추가, 수정, 삭제가 가능하다!
// 예를 들어, animal = 123 이거는 불가하지만, 속성은 수정가능!

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: "김이삭",
  // 메서드 선언
  sayHi() {
    console.log("hi!");
  },
};
person.sayHi();
// 이렇게도 호출가능
person["sayHi"]();
