// 1. if 조건문
let num = 5;
// if (num >= 10) {
//   console.log("num은 10 이상입니다.");
// } else if (num >= 5) {
//   console.log("num은 5 이상입니다");
// } else {
//   console.log("num은 5 미만입니다");
// }

// 2. switch 조건문
// -> 다수의 조건을 처리할때 직관적임
let animal = "dog";
switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  default: {
    console.log("전 몰라요");
    break;
  }
}
