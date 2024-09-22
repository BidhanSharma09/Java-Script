let ar1 = [9, 10, 11, 12, 13, 14];
//          0,  1  ,2 , 3, 4,  5

/* 
it change original array
and return something   (remove item)
ar1.splice(startingIndex, length,newValue1,newValue2,...)
new Value are added form starting index
*/
let ar2 = ar1.splice(1, 3, "a", "b", "c", "d", "e", "f");
console.log(ar1); //[9, "a","b","c", "d","e","f13,14]

console.log(ar2); //[10, 11, 12]
