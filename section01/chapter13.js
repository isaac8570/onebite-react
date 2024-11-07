// 콜백함수? : 자신이 아닌 다른 함수에 인수로써 전달된 함수
function main(value) {
  // value();
}

main(() => {
  console.log("I am sub");
});

// 콜백함수 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});
repeat(5, function (idx) {
  console.log(idx * 2);
});
repeat(5, function (idx) {
  console.log(idx * 3);
});
