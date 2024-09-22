//true => all except below are truthy value
//false => 0, "", false, undefined, null, NaN

//it gives nearest falsy value
// if all are truthy value it gives the last truthy value

let a = 2 && "yo" && undefined && 10;
console.log(a);
