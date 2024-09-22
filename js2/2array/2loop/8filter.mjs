// filter greater than 17

let input = [1, 2, 10, 15, 20, 30, 10];

let output = input.filter((value, i) => {
  if (value > 17) {
    return true;
  }
});

console.log(output);

/* 
by default return is false

*/
