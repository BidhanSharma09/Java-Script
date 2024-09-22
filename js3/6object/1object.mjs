let info = {
  name: "nitan",
  age: 30,
  isMarried: false,
};

let keysArr = Object.keys(info); //["name","age',"isMarried]
console.log(keysArr);

let valuesArr = Object.values(info); //["nitan",30, false]
console.log(valuesArr);
let entriesArr = Object.entries(info); //[["name","nitan"],["age",30],["isMarried",false]]
console.log(entriesArr);
