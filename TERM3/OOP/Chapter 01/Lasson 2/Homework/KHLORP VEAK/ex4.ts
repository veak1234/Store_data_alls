// Instructions:
// • The array should contain ONLY numbers
// • Add types annotation and then fix errors on the code ( if any)

// it is error => Operator '+' cannot be applied to types 'string | number' and 'string | number'

const value1: number = 6;
const value2: number = parseFloat("12.03"); // => Convert string to number using parseFloat
const values: number[] = [value1, value2]; // => values as an array of numbers

// Print the sum of the 2 values
console.log(values[0] + values[1]);