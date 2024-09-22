let bucket1 = ["apple", "banana", "orange"];

let bucket2 = ["mango", "grapes"];

// ["apple","banana","orange", "mango","grapes"]

bucket2.forEach((value, i) => {
  bucket1.push(value);
});

console.log(bucket1);
