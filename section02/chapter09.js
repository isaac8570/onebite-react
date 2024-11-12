// 5가지 배열 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "김이삭", hobby: "cooking" },
  { name: "김미삭", hobby: "cooking" },
  { name: "김코딩", hobby: "coding" },
];

const cookingPeople = arr1.filter((item) => item.hobby === "cooking");
console.log(cookingPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백 함수를 실행하고, 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult1);
let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전 순으로 정렬하는 메서드
// 숫자값을 정렬할때는 추가적인 과정 필요
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);
let arr33 = [5, 3, 1];
arr33.sort((a, b) => {
  if (a > b) {
    // b가 앞에 와야 해
    return 1;
  } else if (b > a) return -1;
  else return 0;
});
print(arr33);

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "isaac"];
const joined = arr6.join(" ");
console.log(joined);
