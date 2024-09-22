// let word = "my name is nitan thapa";
//  reverse whole word such that
//  output must be "ym eman si natin apaht"

let word = "my name is nitan thapa";

let output = word.split(" ").map((value, i) => {
  return value.split("").reverse().join("");
});

console.log(output.join(" "));
