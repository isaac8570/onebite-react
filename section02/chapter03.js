// 1. 배열의 구조분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조분해 할당
let person = {
  name: "김이삭",
  age: 21,
  hobby: "cooking",
};
let { name, age: myAge, hobby, extra = "hello" } = person; // 객체는 중괄호를 사용해요
console.log(name, myAge, hobby, extra);

// 3. 객체구조분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};
func(person);
