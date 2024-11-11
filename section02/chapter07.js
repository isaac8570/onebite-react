// 배열 메서드
// 6가지 요소조작 메서드
//1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7); // push는 배열의 길이 반환도 해

// console.log(arr1);
// console.log(newLength);

// 2. pop
// 배열의 맨 뒤의 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// console.log(poppedItem);
// console.log(arr2);

// 3. shift
// 배열의 맨 앞의 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem, arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(arr4);
// console.log(newLength2);

// 여기서 잠깐 - shift, unshift는 push, pop보다 느려요, 인덱스를 다 옮겨야 하기 때문!

// 5. slice
// 마치 가위처럼, 배열의 특정 부위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 2번 인덱스부터 5번 인덱스 "전까지"
// 아니면 끝까지 하려면 두번째 인수 생략해도
let sliced2 = arr5.slice(2);
// 뒤에서부터 자르고 싶으면 - 붙이기, 뒤에서 부터 몇개 요소 자를건지!
let sliced3 = arr5.slice(-2);
// console.log(sliced3);
// console.log(arr5);

// 6. concat
// 두개의 서로 다른 배열을 이어붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
