
// ======  Rule 1 : TS can guess your type ======
let user = "visal";
let numberPhone = 12345;
user = 45;                   // We cannot assign it to number
console.log(user);

// ===== Rule 2 : If TS can guess, the type is :any ========
let firstName;              // Type is : any

// ===== Rule 3 : We can use annotation ========
let lastName:string;

// ===== Rule 4 : You can choose if parameter are: mandotary or optional ========
// Ex:1 
let greet = (name:string,age?:number):string => {   // For optional parameter if you didn't provide the data, it will be undefined.
    return name;
}
console.log("Hello " + greet("Sal"))

// ===== Rule 5 : Inreference of types ========
let teacher = "Ronan";
let index = teacher.indexOf("a");     // TS can guess your type then it'll recommend fuctions which can use with it.
console.log(index);


