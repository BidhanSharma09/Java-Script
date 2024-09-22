let info = {
  name: "nitan",
};

console.log(info.name);
console.log(info?.country?.district);

//* replace . by ?.
// if you got error like  cannot read property of undefined
// if you got error like  cannot read property of null

let user = {
  name: "ram",
  country: {
    ward: 2,
    district: "kathmandu",
  },
};
console.log(user.name); //"ram"
console.log(user.country); 
console.log(user.country.ward); //2
console.log(user?.father?.name); //undefined
console.log(user?.mother?.name); //undefined
