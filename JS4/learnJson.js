let bidhan = {
    name: "bidhan",
    age: 24, 
};
 let myJson = JSON.stringify(bidhan); //{"name":"bidhan","age":24}
 console.log(myJson)
 console.log(JSON.stringify(1))
 console.log(JSON.stringify([1,2,3]))

let parseData = JSON.parse(myJson); // { name: 'bidhan', age: 24 }
console.log(parseData)

