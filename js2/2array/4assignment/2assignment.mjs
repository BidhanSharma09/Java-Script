// "niTAn"=> "Nitan"
// "niTan" => ["n","i","T","a","n"] => ["N","i","t","a","n"] =>"Nitan"
//         split("")               map()                     join("")

let input = "hariRam";

let result1 = input
  .split("")
  .map((value, i) => {
    if (i === 0) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  })
  .join("");

console.log(result1);
