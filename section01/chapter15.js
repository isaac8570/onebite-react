// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "김이삭",
  age: 21,
  hobby: "요리",
  job: "Student",
  extra: {},
  10: 20,
  "like dog": true, // 띄어쓰기가 포함된 key값은 큰 따옴표로 감싸줘요
  // key : value
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점표기법, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"]; // 접근하고자 하는 프로퍼티의 key 값을 문자열로 넣기
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby); // 이렇게도 할 수 있어요

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "univ student";
person["favoriteFood"] = "pasta";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "student";
person["favoriteFood"] = "고기 좋아해요";
console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재여부확인 (in 연산자)
let result1 = "name" in person;
console.log(result1);
