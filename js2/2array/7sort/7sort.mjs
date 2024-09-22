let names = ["nitan", "ram", "hari"];

// ["ram","hari","nitan"]

let namesSort = names.sort((a, b) => {
  return a.length - b.length;
});

console.log(namesSort);
