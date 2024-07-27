
/*
 INSTRUCTIONS
	1 -  Create a type  `Person` with the following properties:
         - name			(string)
         - nationality	(string)
         - salary			(number)

	2 -  For all the functions : add the parameter types and return type

	3 -  Create 2 objects of type personn (like you want) and  test the 3 functions

*/
// 1. Create type Persion
type Person = {
  name:string;
  nationality: string;
  salary: number;
}

//2. Add type Person to paramater and this function must return string becuase person.name is a string
function getName(person:Person):string {
  return person.name;
}

function sumSalaries(person1:Person, person2:Person):number {
  return person1.salary + person2.salary;
}

function isFrench(person:Person):boolean {
  return person.nationality == "French";
}
