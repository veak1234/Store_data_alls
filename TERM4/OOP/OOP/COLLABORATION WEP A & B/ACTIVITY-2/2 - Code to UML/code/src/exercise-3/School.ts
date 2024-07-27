import { Course } from "./Course";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class School {
  courses: Course[] = [];
  teachers: Teacher[] = [];
  students: Student[] = [];
}
