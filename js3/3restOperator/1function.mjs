let fun = (a, b, ...c) => {
  console.log(a);
  console.log(b);
  console.log(c);
  // [3,4,5,6,7]
};

// here ...c is a rest operator
// rest operator takes rest of values

fun(1, 2, 3, 4, 5, 6, 7);
