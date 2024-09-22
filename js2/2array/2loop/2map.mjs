let names = ["nitan", "ram", "hari"];

// ["nitan thapa","ram thapa","hari thapa"]
// ["my name is nitan thapa","my name is ram thapa","my name is hari thapa"]

let result = names.map((value, i) => {
  return `${value} thapa`;
});

console.log(result);
