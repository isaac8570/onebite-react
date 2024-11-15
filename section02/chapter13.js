// promise 객체 - 비동기 작업을 감싸는 객체
// 비동기 작업 실행, 상태 관리, 결과 저장 등 ..
// 상태 - 대기 -> 성공(해결)/실패(거부)

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수 = executor
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });
  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);
  return add10(result);
})
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// // then 메서드 -> 성공(resolve)했을 때만 호출된다!
// // 그 후에

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// // catch -> 실패했을 때 호출되는 메서드
// // 이렇게 연결해서 작성하는 문법 = chaining
