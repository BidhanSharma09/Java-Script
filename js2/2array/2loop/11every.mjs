let ages = [19, 20, 21];

/* 
if all input return true 
    o/p will be true
    other false

 */

let isGreaterThan18 = ages.every((value, i) => {
  if (value > 18) {
    return true;
  } else {
    return false;
  }
});
console.log(isGreaterThan18);
