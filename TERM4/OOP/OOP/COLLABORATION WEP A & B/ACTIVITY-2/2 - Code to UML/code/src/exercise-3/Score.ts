import { Course } from "./Course";
import { Student } from "./Student";

export class Score {
  course: Course;
  student: Student;
  result: number;

  constructor(course: Course, student: Student, result: number) {
    this.course = course;
    this.student = student;
    this.result = result;
  }
}
