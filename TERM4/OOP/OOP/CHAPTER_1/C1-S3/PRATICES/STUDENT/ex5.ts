// Instructions:
// • Add type annotations (as explicit as possible)
// • Fix errors (if applicable)

const sequence:number[] = [1, 2, 3, 4, 5, 6];
const animals:string[] = ["pangolin", "monkey", "cat", "dog"];
const stringsAndNumbers:(number|string)[] = [1, "one", 2, "two", 3, "three"];
const allMyArrays:(string|number)[][] = [sequence, animals, stringsAndNumbers];

console.log("Exercise 1.5", allMyArrays);
