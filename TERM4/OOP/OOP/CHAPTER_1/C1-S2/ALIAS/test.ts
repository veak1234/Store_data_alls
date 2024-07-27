type studentList = {name:string, age:number};

let student1:studentList= {name:"visal", age:20};
console.log(student1);

let getStudentInfo=(firstName:string, lastName?:string):string=>{    // ? : use: for optional.
    return "Your firstname is : " + firstName + "\n lastname is : " + lastName;
}
console.log(getStudentInfo("vi", "sal"))