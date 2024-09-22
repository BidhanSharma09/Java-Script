// filter string ["a",1,"b",3,"nitan",] = ["a","b","nitan"] (filter the string)

let input = ["a", 1, "b", 3, "nitan"];

let output = input.filter((value, i) => {
  if (typeof value === "string") {
    return true;
  } else {
    return false;
  }
});
