let ar1 = [1, 2, 3];
// sum of  all element of array and
//  0+1+2+3

let result = ar1.reduce((pre, cur) => {
  return pre + cur;
}, 0);

console.log(result);//6
