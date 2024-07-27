import { Teacher } from "./Teacher";

export class Course {
  name: string;
  teacher: Teacher;

  constructor(name: string, teacher: Teacher) {
    this.name = name;
    this.teacher = teacher;
  }
}
