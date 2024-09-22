/* 
true
false => null, undefined
*/

let a = undefined ?? null ?? null ?? 1;
console.log(a);

// nullish operator consider only undefined and null as falsy value