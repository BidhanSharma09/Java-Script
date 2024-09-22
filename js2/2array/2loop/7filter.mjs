/* 
syntax 
execution
uses
  [1,2,3] => [1,3]  use filter
  [1,2,3] => [1,4]  don't use filter
 */

let input = [1, 2, 3];

//output =[2]
let output = input.filter((value, i) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(output);
