/* 
syntax 
execution
 */

// if some of the input element return true o/p will be true
let ar1 = ["apple", "mango", "banana"];
let v = ar1.some((value, i) => {
  if (value === "mango") {
    return true;
  }
});
console.log(v);
