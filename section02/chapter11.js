// 동기 -> 여러개의 작업을 순서대로 실행하는 것
// 자바스크립트는 기본적으로 코드를 작성한 순서대로, = 동기적으로 코드를 실행함
// but 단점 존재 -> 하나가 너무 오래걸리면, 나머지는 다 기다려야 해..
// 자바스크립트는 쓰레드가 하나밖에 없어서 멀티 쓰레딩도 불가,,

// 비동기 -> 작업을 순서대로 처리하지 않음
// 자바 스크립트는 작업을 기다리지 않고, 동시에 작업 시행, 콜백함수를 붙여서 사용
// 비동기 작업들은 자바 스크립트엔진이 아닌, Web APIs에서 실행됨

console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000); // 얘는 3초가 지나면 실행됨 -> 비동기적

console.log(3);
// 동기적
