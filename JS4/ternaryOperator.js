/* 
replacement of if-else
 */

/* 
    isMarried
        true => "jau sasurai"
        false => "jau mama ghar"

    
    age
        age>=18 => can vote
        else    => can not vote


    gender 
        male => "he is male"
        female => "she is female"
        other =>  "They are other"
        else  => none


    age 
        0-17 => under age
        18-60 =>  adult
        else => old 



    hasCar
        true  => "he is rich"
*/

let hasCar = false;

let output5 = hasCar === true ? "he is rich" : null;

console.log(output5);

let isMarried = false;

let output = isMarried === true ? "jau sasurali" : "jau mamaghar";
console.log(output);

let age = 10;
let output1 = age >= 18 ? "can vote" : "can not vote";
console.log(output1);

let gender = "a";

let output2 =
  gender === "male"
    ? "he is male"
    : gender === "female"
    ? "she is female"
    : gender === "other"
    ? "they are other"
    : "none";

console.log(output2);

let age1 = 70;

let output3 =
  age1 >= 0 && age1 <= 17
    ? "under age"
    : age1 >= 18 && age1 <= 60
    ? "adult"
    : "old";

console.log(output3);
