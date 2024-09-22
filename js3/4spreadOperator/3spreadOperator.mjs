let info1 = { name: "nitan", age: 30 };
let info2 = { address: "usa", isMarried: true };

let info3 = { ...info1, ...info2, education: "Er" };

console.log(info3);
