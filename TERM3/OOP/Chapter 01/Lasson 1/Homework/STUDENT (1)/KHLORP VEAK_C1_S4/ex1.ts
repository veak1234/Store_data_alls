
/*
 INSTRUCTIONS
	1 -  Create a type  `Person` with the following properties:
         - name			(string)
         - nationality	(string)
         - salary			(string)

	2 -  For all the functions : add the parameter types and return type

	3 -  Create 2 objects of type personn (like you want) and  test the 3 functions

*/
type person = {
  name : string;
  nationality : string;
  salary : string;
};

function getName(person: person) :string {
  return person.name;
};

function sumSalaries(person1: person, person2: person) :string {
  return person1.salary + person2.salary;
}

function isFrench(person : person) {
  return person.nationality == "French";
}

let person1 = {name:"Veak", nationality: "Khmer", salary: "400$"}
let person2 = {name:"Rath", nationality: "French", salary: "600$"}

console.log(getName(person1));
console.log(isFrench(person2));
console.log(sumSalaries(person1,person2));