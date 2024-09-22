let sum = (...value) => {
    
  let output = value.reduce((pre, cur) => {
    return pre + cur;
  }, 0);

  return output;
};

let _sum = sum(1, 2, 1, 1, 2);
console.log(_sum);
