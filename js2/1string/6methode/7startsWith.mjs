let detail = "my name is  nitan";

console.log(detail.startsWith("m"));
console.log(detail.startsWith("my "));
console.log(detail.startsWith("my n"));
console.log(detail.startsWith("nitan")); //false
console.log(detail.endsWith("my")); //false
console.log(detail.endsWith("nitan")); //true
