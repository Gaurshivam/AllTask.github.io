
// Q.3:-Give the output and explain the reasoning behind such behaviur?

let idx = {
    'name' : "Shivam",
}
let idx1 = {
    'name': "geekster",
}

let obj = {};

obj[idx] = "IDX";
obj[idx1] = "IDX1";

console.log(obj);
