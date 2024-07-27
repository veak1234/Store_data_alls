export class Student {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

export class Classroom {
  private name: string;
  private school: School;
  private students: Student[] = [];

  constructor(school: School, name: string) {
    this.school = school;
    this.name = name;
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public getNumberOfStudents(): number {
    return this.students.length;
  }
}

export class School {
  private name: string;
  private classrooms: Classroom[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public addClassroom(classroomName: string): Classroom {
    let newCLassroom = new Classroom(this, classroomName);
    this.classrooms.push(newCLassroom);
    return newCLassroom;
  }
}
