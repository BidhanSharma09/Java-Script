let ar1 = [9, 10, 11];

//                  19  ,11
let v = ar1.reduce((pre, cur) => {
  return pre + cur;
}, 0);//9//19//30

console.log(v);
