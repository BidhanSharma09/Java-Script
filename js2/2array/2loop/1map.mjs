let ar1 = [10, 11, 12];

/*
syntax
execution

*/

let ar2 = ar1.map((value, i) => {
  return "a";
});

console.log(ar2);
console.log(ar1);

let ar3 = ar1.map((value, i) => {
  return value * 2;
});

console.log(ar3);

// ar4 =[0,11,24]
//                  12 , 2
let ar4 = ar1.map((value, i) => {
  return value * i;
});

console.log(ar4);
