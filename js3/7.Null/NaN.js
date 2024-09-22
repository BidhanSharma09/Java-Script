// NaN => "Not a nummber"
// NaN will be produce if we try to perform arithemetic operation between invalid number

console.log(1*1);
console.log("a"*"a");

//How to check NaN
//=== is not used to checked NaN
//
console.log(NaN=== NaN);

let a = NaN;
let check = isNaN(a);
console.log(check);