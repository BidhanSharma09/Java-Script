//true => all except below are truthy value
//false => 0, "", false, undefined, null, NaN

let b = undefined || null || "" || 10;
console.log(b);


//or will give nearest truthy value
//if all are false value it will give last falsy value
