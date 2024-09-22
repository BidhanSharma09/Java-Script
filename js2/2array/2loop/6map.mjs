// ["my","name","is"] => ["MYN","NAMEN","ISN"]

let input = ["my", "name", "is"];

let output = input.map((value, i) => {
  //   return value.toUpperCase() + "N";

  //   return `${value.toUpperCase()}N`;
  return `${value}n`.toUpperCase();
});

console.log(output);
