// Instructions:
// • Add type annotations (as explicit as possible)
// • Fix errors (if applicable)

var sequence: number[] = [1, 2, 3, 4, 5, 6]; // => Array of numbers
var animals: string[] = ["pangolin", "monkey", "cat", "dog"]; // => Array of strings
var stringsAndNumbers: (number | string)[] = [1, "one", 2, "two", 3, "three"]; // => Array of numbers or strings
var allMyArrays: (number[] | string[] | (number | string)[])[] = [sequence, animals, stringsAndNumbers]; // => Array containing arrays of numbers, arrays of strings, or arrays of numbers and strings
console.log("Exercise 1.5", allMyArrays);