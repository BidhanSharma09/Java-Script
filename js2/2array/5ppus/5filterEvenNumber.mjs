//using push
let ar1 = [1, 2, 3, 4, 5, 6];
// [2,4,6]

let ar2 = [];

ar1.forEach((value, i) => {
  if (value % 2 === 0) {
    ar2.push(value);
  }
});

console.log(ar2);
