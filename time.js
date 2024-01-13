// let time = new Date();
// console.log(time.getHours());
// console.log(time.getMinutes());

// let mytime = new Date(
//   "Fri Dec 05 1980 00:00:00 GMT+0000 (Coordinated Universal Time)"
// );

// console.log(mytime.getDate());

function sum(a, b) {
//   console.log(arguments);
  let args = Object.values(arguments);
//   console.log(args);
  let result = args.map((value) => value + value);
  return result
  return a + b;
}

console.log(sum(1, 2,3));
