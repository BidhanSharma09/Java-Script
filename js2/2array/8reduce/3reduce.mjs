// product of  all element of array and
let ar1 = [1, 2, 3];
//  1*1*2*3=6
let result = ar1.reduce((pre, cur) => {
  return pre + cur;
}, 0);

console.log(result); //6
