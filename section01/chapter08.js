// 1. null 병합 연산자
//-> 존재하는 값을 추려내는 기능
//-> null이나 undefined 찾는 애

let var1,
  var2 = 10,
  var3 = 30;
let var4 = var2 ?? var3; // null 병합 연산자
console.log(var4);
// 둘 다 값이 있으면 맨 앞의 값을 출력함

let userName = "김이삭";
let userNickName = "happy-penguin";

let displayName = userName ?? userNickName;
console.log(displayName);

// 2. typeof 연산자

let var5 = 1;
var5 = "Hello";
let t1 = typeof var5;
console.log(t1);


// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환