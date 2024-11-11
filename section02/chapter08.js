// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log(isInclude);

// 3. indexOf = 얕은 비교 사용
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 없으면 -1 반환, 중복된 값이 있으면 가장 앞쪽 값의 인덱스 반환
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// console.log(index);

let objectArr = [{ name: "isaac" }, { name: "tongtong" }];
// console.log(objectArr.indexOf({ name: "isaac" }));
// -> -1이 나와 = indexOf로는 동등비교만 가능하고 프로퍼티를 기준으로 비교 불가
//이럴때 findIndex 사용가능

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수의 조건을 만족하는(참을 반환하는) 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});
// 위의 식은 아래와 같이 쓸 수도 있어요(같은 뜻)
const findedIndex2 = arr4.findIndex((item) => item % 2 !== 0);

// console.log(findedIndex);
// 가장 먼지 이 조건문을 만족하는 인덱스를 반환해

// indexOf와 비교
//console.log(objectArr.findIndex((item) => item.name === "isaac"));

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "isaac" }, { name: "tongtong" }];
const finded = arr5.find((item) => item.name === "isaac");
console.log(finded);
