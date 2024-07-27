// Array of object type
type StudentInfo = {
  name: string;
  age: number;
  class: string;
  year: number;
}[];

let students: StudentInfo = [
    { name: "sal", age: 19, class: "WEP A", year: 2023 },
    { name: "Olivia", age: 20, class: "WEP A", year: 2023 },
    { name: "Tayler Swift", age: 20, class: "WEP A", year: 2023 },
];

students.forEach(student => {
    console.log(student)
});
