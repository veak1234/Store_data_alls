
import{Classe} from './Class';
import{School} from './School';
import{Student} from './Student';

// Class 
let Students= new Student("Veak",29,"20");
let Clase = new Classe("WEB A");
Clase.getAddStudent(Students)
console.log(Clase)

// School
let Class = new Classe("WEB A");
let Schools= new School("PNC");
Schools.getAddClass(Class);
console.log(Schools)

// Student
let Studen = new Student("Veak",15,"2912832");
console.log(Studen)